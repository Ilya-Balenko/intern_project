# Logging and Monitoring (5.4)

## Overview
This project implements server-side logging using **Winston** and documents a simple monitoring approach for a Node.js/Express application.

Goals covered:
- Persist request and error logs to files
- Verify logging behavior by triggering different error scenarios
- Review basic monitoring options and document usage

---

## Logging (Winston)

### Library
Logging is implemented with **Winston** on the server side.

### Log outputs
Logs are written to the following files (project root):
- `logs/combined.log` — general log output (requests and informational events)
- `logs/error.log` — error-level logs only

### Log format
Logs are structured as **JSON** and include:
- `timestamp`
- `level`
- `message`
- `code` (when available, e.g., MySQL error code)
- `stack` (for errors)
- `method`, `path`, `ip` (when attached from request context)

---

## Tested scenarios (Postman)

### 1) Normal request: GET /users

**Request**
- Method: `GET`
- URL: `http://localhost:3000/users`

**Expected**
- Status: `200`
- Response contains `data` and `pagination`

**Result**
- Request completed successfully
- Entry created in `logs/combined.log`

---

### 2) DB error scenario: duplicate email (ER_DUP_ENTRY)

**Request**
```json
{
  "name": "Test User",
  "email": "test.user.9999@example.com",
  "password": "secret123"
}
```

**Steps**
1. Send request once (creates user)
2. Send same request again

**Expected**
- API returns `400`
- Error logged with MySQL code `ER_DUP_ENTRY`
- Stack trace stored in error log

**Result**
- Error recorded in both `combined.log` and `error.log`

---

### 3) Invalid request / malformed JSON

**Request**
- POST `/users`
- Malformed JSON or invalid fields

**Expected**
- API returns `400`
- Error details logged with timestamp and stack (when applicable)

**Result**
- Validation and parsing errors logged correctly

---

## Log examples

### Example from combined.log
```json
{"code":"ER_DUP_ENTRY","level":"error","message":"Unhandled error Duplicate entry 'test.user.9999@example.com' for key 'users.email'","stack":"Error: Duplicate entry 'test.user.9999@example.com' for key 'users.email'","timestamp":"2026-02-14T19:05:55.928Z"}
```

### Example from error.log
```json
{"code":"ER_DUP_ENTRY","level":"error","message":"Unhandled error Duplicate entry 'test.user.998889@example.com' for key 'users.email'","method":"POST","path":"/users","stack":"Error: Duplicate entry 'test.user.998889@example.com' for key 'users.email'","timestamp":"2026-02-14T19:09:45.499Z"}
```

---

## Monitoring

### Option 1: PM2 (local monitoring)

Install globally:
```bash
npm install -g pm2
```

Start application:
```bash
pm2 start src/server.js --name intern-project
```

Check status:
```bash
pm2 status
pm2 monit
```

Stop and remove:
```bash
pm2 stop intern-project
pm2 delete intern-project
```

PM2 provides:
- CPU usage
- memory usage
- uptime
- restart count

---

### Option 2: New Relic (overview)

New Relic free tier can provide:
- Application Performance Monitoring (APM)
- Response time tracking
- Error rate monitoring
- Basic dashboards

This is useful after deployment to a test environment.

---

## Notes

- The `logs/` directory is excluded via `.gitignore`.
- Error logs include full stack traces for debugging.
- Duplicate email errors (`ER_DUP_ENTRY`) are properly handled and logged.
