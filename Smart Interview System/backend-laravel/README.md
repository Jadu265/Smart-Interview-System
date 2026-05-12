# Smart Interview Backend (Laravel)

Laravel backend that mirrors the previous Node.js API contract while keeping Firebase as the data layer.

## What this provides

- Same endpoint contract used in Node.js backend
- Firebase-backed data read via service-account authentication
- API-first backend for admin dashboard and analytics

## Setup

1. Install dependencies

	composer install

2. Create environment file

	Copy `.env.example` to `.env` if needed.

3. Configure Firebase credentials in `.env`

- `FIREBASE_SERVICE_ACCOUNT_JSON` (one-line JSON), or
- `GOOGLE_APPLICATION_CREDENTIALS` (path to service account JSON file)

4. Run backend on the same port used before (5000)

	composer run api

Server starts at `http://127.0.0.1:5000`.

## Endpoints

- `GET /`
- `GET /api`
- `GET /api/health`
- `GET /api/users`
- `GET /api/users/{id}`
- `GET /api/interviews`
- `GET /api/interviews/{id}`
- `GET /api/analytics/overview`

## Notes

- Current access flow: `frontend -> Laravel backend -> Firestore`
- If Firebase credentials are not set, `health` still responds and data endpoints return a clear error.

