<?php

namespace App\Services;

use Google\Auth\Credentials\ServiceAccountCredentials;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class FirestoreRestService
{
    private ?array $serviceAccount = null;

    private ?string $projectId = null;

    public function isConfigured(): bool
    {
        try {
            $this->loadServiceAccount();

            return !empty($this->projectId);
        } catch (\Throwable) {
            return false;
        }
    }

    public function getCollection(string $collection): array
    {
        $serviceAccount = $this->loadServiceAccount();
        $token = $this->fetchAccessToken($serviceAccount);

        $documents = [];
        $pageToken = null;

        do {
            $url = sprintf(
                'https://firestore.googleapis.com/v1/projects/%s/databases/(default)/documents/%s',
                urlencode((string) $this->projectId),
                rawurlencode($collection)
            );

            $response = Http::withToken($token)
                ->acceptJson()
                ->get($url, array_filter([
                    'pageSize' => 1000,
                    'pageToken' => $pageToken,
                ]));

            if (!$response->successful()) {
                throw new RuntimeException('Failed to fetch Firestore collection: '.$collection);
            }

            $payload = $response->json();

            foreach (($payload['documents'] ?? []) as $document) {
                $documents[] = $this->normalizeDocument($document);
            }

            $pageToken = $payload['nextPageToken'] ?? null;
        } while (!empty($pageToken));

        return $documents;
    }

    public function getDocument(string $collection, string $documentId): ?array
    {
        $serviceAccount = $this->loadServiceAccount();
        $token = $this->fetchAccessToken($serviceAccount);

        $url = sprintf(
            'https://firestore.googleapis.com/v1/projects/%s/databases/(default)/documents/%s/%s',
            urlencode((string) $this->projectId),
            rawurlencode($collection),
            rawurlencode($documentId)
        );

        $response = Http::withToken($token)
            ->acceptJson()
            ->get($url);

        if ($response->status() === 404) {
            return null;
        }

        if (!$response->successful()) {
            throw new RuntimeException('Failed to fetch Firestore document: '.$collection.'/'.$documentId);
        }

        return $this->normalizeDocument((array) $response->json());
    }

    private function loadServiceAccount(): array
    {
        if ($this->serviceAccount !== null) {
            return $this->serviceAccount;
        }

        $rawJson = env('FIREBASE_SERVICE_ACCOUNT_JSON');
        if (!empty($rawJson)) {
            $decoded = json_decode($rawJson, true);
            if (!is_array($decoded)) {
                throw new RuntimeException('Invalid FIREBASE_SERVICE_ACCOUNT_JSON format.');
            }
            $this->serviceAccount = $decoded;
            $this->projectId = $decoded['project_id'] ?? env('FIREBASE_PROJECT_ID');

            return $this->serviceAccount;
        }

        $credentialsPath = env('GOOGLE_APPLICATION_CREDENTIALS');
        if (empty($credentialsPath) || !is_file($credentialsPath)) {
            throw new RuntimeException('Firebase is not configured. Set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS.');
        }

        $decoded = json_decode((string) file_get_contents($credentialsPath), true);
        if (!is_array($decoded)) {
            throw new RuntimeException('Invalid JSON in GOOGLE_APPLICATION_CREDENTIALS file.');
        }

        $this->serviceAccount = $decoded;
        $this->projectId = $decoded['project_id'] ?? env('FIREBASE_PROJECT_ID');

        return $this->serviceAccount;
    }

    private function fetchAccessToken(array $serviceAccount): string
    {
        $credentials = new ServiceAccountCredentials(
            ['https://www.googleapis.com/auth/datastore'],
            $serviceAccount
        );

        $token = $credentials->fetchAuthToken();
        $accessToken = $token['access_token'] ?? null;

        if (!is_string($accessToken) || $accessToken === '') {
            throw new RuntimeException('Unable to generate Firestore access token.');
        }

        return $accessToken;
    }

    private function normalizeDocument(array $document): array
    {
        $name = (string) ($document['name'] ?? '');
        $id = $name !== '' ? basename($name) : null;

        return [
            'id' => $id,
            'fields' => $this->parseMap((array) ($document['fields'] ?? [])),
        ];
    }

    private function parseMap(array $map): array
    {
        $result = [];
        foreach ($map as $key => $value) {
            $result[$key] = $this->parseValue((array) $value);
        }

        return $result;
    }

    private function parseValue(array $value): mixed
    {
        if (array_key_exists('nullValue', $value)) {
            return null;
        }
        if (array_key_exists('stringValue', $value)) {
            return (string) $value['stringValue'];
        }
        if (array_key_exists('booleanValue', $value)) {
            return (bool) $value['booleanValue'];
        }
        if (array_key_exists('integerValue', $value)) {
            return (int) $value['integerValue'];
        }
        if (array_key_exists('doubleValue', $value)) {
            return (float) $value['doubleValue'];
        }
        if (array_key_exists('timestampValue', $value)) {
            return (string) $value['timestampValue'];
        }
        if (array_key_exists('mapValue', $value)) {
            return $this->parseMap((array) (($value['mapValue']['fields'] ?? [])));
        }
        if (array_key_exists('arrayValue', $value)) {
            $values = $value['arrayValue']['values'] ?? [];

            return array_map(fn ($item) => $this->parseValue((array) $item), $values);
        }

        return null;
    }
}

