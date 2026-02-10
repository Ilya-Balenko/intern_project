# intern_project — Node.js REST API (Express + MySQL)

A small backend project built with **Node.js**, **Express**, and **MySQL** using a **layered architecture** (controllers → services → models).  
The project currently implements a **Users API** plus basic validation, centralized error handling, request logging, and automated tests.

> Note: `/health` route existed earlier but is not part of the current implementation.

## Tech Stack
- Node.js
- Express
- MySQL (`mysql2/promise`)
- Jest (unit tests)
- Supertest (integration tests)
- autocannon (performance check)

## Current Features
- Create user: `POST /users`
- List users (pagination + optional email filter): `GET /users`
- Input validation (validators called from controllers)
- Centralized error handling middleware
- Request logging middleware
- Minimal UI served from `public/` for manual testing

## Planned / Not Implemented
- Authentication (login/logout)
- Posts API
- Logs API endpoints (DB table/model exists, API not exposed)

## API
### Users
- `POST /users` — create user  
  Body: `{ "name": string, "email": string, "password": string }`
- `GET /users` — list users  
  Query: `email` (optional), `page` (default 1), `limit` (default 10)

See: `docs/api_spec.md`

## Project Structure (high level)

```
intern_project/
├── src/
│   ├── app.js            # Express app configuration
│   ├── server.js         # Server startup
│   ├── controllers/      # HTTP request handlers
│   ├── services/         # Business logic layer
│   ├── models/           # Database access layer
│   ├── routes/           # API route definitions
│   ├── middleware/       # Error handling & request middleware
│   ├── utils/            # Validators and helper functions
│   └── db/               # MySQL connection pool
├── public/               # Minimal frontend UI
├── tests/                # Unit + integration tests
├── docs/                 # Technical documentation
├── .env.example
├── package.json
└── README.md
```

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create `.env` based on `.env.example`:

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

### 3) Run the server (dev)
```bash
npm run dev
```

Open:
- UI: `http://localhost:3000/`
- API: `http://localhost:3000/users`

## Tests

### Unit tests
```bash
npm test
```

### Integration tests
```bash
npm run test:int
```

## Documentation
All documentation lives in `docs/` (architecture, API, validation, testing, performance, UI/UX notes).
