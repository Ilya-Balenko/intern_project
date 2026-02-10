# Middleware design

This project uses a small set of Express middleware and utilities.

## Request parsing
The app uses built-in Express middleware:

- `express.json()` to parse JSON request bodies.

## Static UI
Static frontend files are served from the `public/` directory using:

- `express.static(...)`

## Request logging
A request logging middleware is used to log method, URL, status code, response time, and IP address.

Location:
- `src/middleware/requestLogger.js`

Connected in:
- `src/app.js` (registered before routes)

## Validation
Validation is implemented as reusable utility functions (not Express middleware).
Validators are called inside controllers before calling services.

Validators:
- `src/utils/userValidator.js`
- `src/utils/postValidator.js` (planned / used when Posts API is implemented)
- `src/utils/logValidator.js` (used when Logs API is implemented)

Validation result format:
- `{ valid: true }` on success
- `{ valid: false, message: "..." }` on failure

Controllers return HTTP 400 with JSON `{ message: "..." }` when validation fails.

## Error handling middleware
A single error-handling middleware catches unhandled errors and returns HTTP 500.

Location:
- `src/middleware/errorHandler.js`

Behavior:
- Logs the error to console
- Returns JSON response:
  - `500` with `{ error: { code: "INTERNAL_ERROR", message: "Something went wrong" } }`
