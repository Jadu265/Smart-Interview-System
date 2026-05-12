<?php

namespace App\Http\Controllers;

use App\Services\FirestoreRestService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Throwable;

class ApiController extends Controller
{
    public function __construct(private readonly FirestoreRestService $firestore)
    {
    }

    public function root(): JsonResponse
    {
        return response()->json([
            'ok' => true,
            'message' => 'Smart Interview backend is running',
            'docs' => '/api/health',
        ]);
    }

    public function health(): JsonResponse
    {
        return response()->json([
            'ok' => true,
            'service' => 'smart-interview-backend',
            'timestamp' => now()->toISOString(),
            'firebaseReady' => $this->firestore->isConfigured(),
        ]);
    }

    public function users(): JsonResponse
    {
        try {
            $users = $this->firestore->getCollection('users');
            $interviews = $this->firestore->getCollection('interviews');

            $counts = [];
            foreach ($interviews as $interview) {
                $userId = $interview['fields']['userId'] ?? null;
                if (!empty($userId)) {
                    $counts[$userId] = ($counts[$userId] ?? 0) + 1;
                }
            }

            $payload = array_map(function (array $user) use ($counts) {
                $data = $user['fields'];
                $joinedAt = $data['createdAt']
                    ?? $data['joinedAt']
                    ?? $data['joinDate']
                    ?? $data['registeredAt']
                    ?? null;

                $id = $user['id'];

                return [
                    'id' => $id,
                    'uid' => $data['uid'] ?? $id,
                    'name' => $data['displayName'] ?? null,
                    'email' => $data['email'] ?? null,
                    'joinedAt' => $this->toDateString($joinedAt),
                    'lastActiveAt' => $this->toDateString($data['lastLogin'] ?? $data['updatedAt'] ?? null),
                    'interviewCount' => $counts[$id] ?? 0,
                ];
            }, $users);

            return response()->json([
                'total' => count($payload),
                'users' => array_values($payload),
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'message' => 'Failed to load users',
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function userById(string $id): JsonResponse
    {
        try {
            $user = $this->firestore->getDocument('users', $id);
            if ($user === null) {
                return response()->json(['message' => 'User not found'], 404);
            }

            $data = $user['fields'];
            $joinedAt = $data['createdAt']
                ?? $data['joinedAt']
                ?? $data['joinDate']
                ?? $data['registeredAt']
                ?? null;

            return response()->json([
                'id' => $user['id'],
                'uid' => $data['uid'] ?? $user['id'],
                'name' => $data['displayName'] ?? null,
                'email' => $data['email'] ?? null,
                'joinedAt' => $this->toDateString($joinedAt),
                'lastActiveAt' => $this->toDateString($data['lastLogin'] ?? $data['updatedAt'] ?? null),
                'raw' => $data,
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'message' => 'Failed to load user',
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function interviews(Request $request): JsonResponse
    {
        try {
            $role = $request->query('role');
            $difficulty = $request->query('difficulty');

            $interviews = array_map(function (array $item) {
                $data = $item['fields'];

                return [
                    'id' => $item['id'],
                    'userId' => $data['userId'] ?? null,
                    'userName' => $data['userName'] ?? null,
                    'userEmail' => $data['userEmail'] ?? null,
                    'role' => $data['role'] ?? null,
                    'difficulty' => $data['difficulty'] ?? null,
                    'score' => $data['score'] ?? null,
                    'timeTaken' => $data['timeTaken'] ?? null,
                    'createdAt' => $this->toDateString($data['createdAt'] ?? null),
                    'updatedAt' => $this->toDateString($data['updatedAt'] ?? null),
                ];
            }, $this->firestore->getCollection('interviews'));

            if (!empty($role)) {
                $interviews = array_values(array_filter($interviews, fn ($item) => $item['role'] === $role));
            }

            if (!empty($difficulty)) {
                $interviews = array_values(array_filter($interviews, fn ($item) => $item['difficulty'] === $difficulty));
            }

            usort($interviews, function (array $a, array $b) {
                return strcmp((string) ($b['createdAt'] ?? ''), (string) ($a['createdAt'] ?? ''));
            });

            return response()->json([
                'total' => count($interviews),
                'interviews' => $interviews,
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'message' => 'Failed to load interviews',
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function interviewById(string $id): JsonResponse
    {
        try {
            $interview = $this->firestore->getDocument('interviews', $id);
            if ($interview === null) {
                return response()->json(['message' => 'Interview not found'], 404);
            }

            $data = $interview['fields'];

            return response()->json([
                'id' => $interview['id'],
                'userId' => $data['userId'] ?? null,
                'userName' => $data['userName'] ?? null,
                'userEmail' => $data['userEmail'] ?? null,
                'role' => $data['role'] ?? null,
                'difficulty' => $data['difficulty'] ?? null,
                'score' => $data['score'] ?? null,
                'timeTaken' => $data['timeTaken'] ?? null,
                'createdAt' => $this->toDateString($data['createdAt'] ?? null),
                'updatedAt' => $this->toDateString($data['updatedAt'] ?? null),
                'raw' => $data,
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'message' => 'Failed to load interview',
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function analyticsOverview(): JsonResponse
    {
        try {
            $users = $this->firestore->getCollection('users');
            $interviews = $this->firestore->getCollection('interviews');

            $roleCounts = [];
            $scored = 0;
            $scoreTotal = 0;

            foreach ($interviews as $interview) {
                $data = $interview['fields'];

                if (!empty($data['role'])) {
                    $role = $data['role'];
                    $roleCounts[$role] = ($roleCounts[$role] ?? 0) + 1;
                }

                if (is_numeric($data['score'] ?? null)) {
                    $scored += 1;
                    $scoreTotal += (float) $data['score'];
                }
            }

            $averageScore = $scored > 0 ? (int) round($scoreTotal / $scored) : 0;
            $topRole = null;
            $topRoleCount = 0;

            foreach ($roleCounts as $role => $count) {
                if ($count > $topRoleCount) {
                    $topRole = $role;
                    $topRoleCount = $count;
                }
            }

            return response()->json([
                'totalUsers' => count($users),
                'totalInterviews' => count($interviews),
                'averageScore' => $averageScore,
                'topRole' => $topRole,
                'topRoleCount' => $topRoleCount,
                'roleCounts' => $roleCounts,
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'message' => 'Failed to load analytics overview',
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function contactSales(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255'],
            'company' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'min:10', 'max:2000'],
            'source' => ['nullable', 'string', 'max:100'],
        ]);

        try {
            $existing = [];
            if (Storage::disk('local')->exists('contact-sales-leads.json')) {
                $raw = Storage::disk('local')->get('contact-sales-leads.json');
                $decoded = json_decode($raw, true);
                if (is_array($decoded)) {
                    $existing = $decoded;
                }
            }

            $lead = [
                'id' => uniqid('lead_', true),
                'name' => $validated['name'],
                'email' => strtolower($validated['email']),
                'company' => $validated['company'] ?? null,
                'message' => $validated['message'],
                'source' => $validated['source'] ?? 'landingpage',
                'submittedAt' => now()->toISOString(),
                'ip' => $request->ip(),
            ];

            $existing[] = $lead;

            Storage::disk('local')->put(
                'contact-sales-leads.json',
                json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
            );

            return response()->json([
                'ok' => true,
                'message' => 'Contact request received',
                'leadId' => $lead['id'],
            ])->withHeaders([
                'Access-Control-Allow-Origin' => '*',
                'Access-Control-Allow-Methods' => 'POST, OPTIONS',
                'Access-Control-Allow-Headers' => 'Content-Type, Accept',
            ]);
        } catch (Throwable $error) {
            return response()->json([
                'ok' => false,
                'message' => 'Failed to save contact request',
                'error' => $error->getMessage(),
            ], 500)->withHeaders([
                'Access-Control-Allow-Origin' => '*',
                'Access-Control-Allow-Methods' => 'POST, OPTIONS',
                'Access-Control-Allow-Headers' => 'Content-Type, Accept',
            ]);
        }
    }

    private function toDateString(mixed $value): ?string
    {
        if ($value === null || $value === '') {
            return null;
        }

        if (is_array($value) && isset($value['_seconds'])) {
            $timestamp = (int) $value['_seconds'];

            return gmdate('c', $timestamp);
        }

        if (is_numeric($value)) {
            $timestamp = (int) $value;
            if ($timestamp > 9999999999) {
                $timestamp = (int) floor($timestamp / 1000);
            }

            return gmdate('c', $timestamp);
        }

        try {
            return (new \DateTime((string) $value))->format(DATE_ATOM);
        } catch (Throwable) {
            return null;
        }
    }
}

