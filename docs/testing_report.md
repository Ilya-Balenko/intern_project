# Testing Report
The project uses a multi-level testing approach including unit tests,
service tests with mocks, integration tests, and manual UI testing
to ensure application reliability.


## 4.2 — Validation unit tests
- validateUser.test.js — OK
- validatePost.test.js — OK
- validateLog.test.js — OK

## 4.3 — Service unit tests (Jest mocks) and error handler

### Services
| Test file | What is tested | Result |
|----------|-----------------|--------|
| tests/services/userService.test.js | addUser, listUsers (success + error) with mocked usersModel | OK |
| tests/services/postsService.test.js | addPost, listPosts, removePost (success + error) with mocked postModel | OK |
| tests/services/logsService.test.js | addLog, listLogs (success + error) with mocked logModel | OK |

### Middleware
| Test file | What is tested | Expected status | Result |
|----------|-----------------|----------------|--------|
| tests/middleware/errorHandler.test.js | unified error response structure | 500 | OK |


## 4.4 Integration tests (Supertest)

### Tools
- Jest
- Supertest
- Test environment via `.env.test`
- Database: MySQL (mysql2)

### Setup
- Express app exported from `src/app.js`
- Server startup (`app.listen`) isolated to `src/server.js` and protected with `require.main === module`
- Database cleanup after each test via `tests/helpers/dbCleanup.js` (TRUNCATE with `FOREIGN_KEY_CHECKS`)

### Implemented tests
- `tests/integration/users.test.js`
  - `POST /users → GET /users` (creates user and verifies it appears in list)
  - `POST /users` with invalid password returns `400`

### Results
All integration tests passed successfully.


# Manual UI Test Results (4.5)

Date: 2026-01-30  
Project: intern_project  
Scope: UI served from `public/` via Express static middleware, validation messages, layout/CSS consistency  
Browsers tested: Chrome, Firefox, Edge  
URL: http://localhost:3000/

## Test data used
### Valid user
- name: Test User
- email: test.user@example.com
- password: secret123

### Invalid users
1) name: A, email: test.user@example.com, password: secret123  
2) name: Test User, email: not-an-email, password: secret123  
3) name: Test User, email: test.user@example.com, password: 123

## Test cases

### TC-UI-01 — Open UI page
Steps:
1. Open http://localhost:3000/
Expected:
- Page loads successfully, no broken layout.
Result:
- PASS
Notes:
- UI loads correctly via Express static middleware.

### TC-UI-02 — Create user (valid data)
Steps:
1. Fill the form with valid user data.
2. Click "Create user".
Expected:
- Success message is shown.
- User appears in the users list after creation.
Result:
- PASS
Notes:
- User was created and list refreshed automatically.

### TC-UI-03 — Create user (invalid data)
Steps:
1. Try each invalid scenario and submit.
Expected:
- Error message is shown.
- User is not created.
Result:
- PASS
Notes:
- Validation errors displayed correctly (400 response handled by UI).

### TC-UI-04 — Load users / Refresh
Steps:
1. Click "Load users".
2. Click "Refresh".
Expected:
- Users list loads and updates.
Result:
- PASS
Notes:
- List renders correctly.

### TC-UI-05 — Clear view
Steps:
1. Click "Clear view".
Expected:
- List becomes empty (UI only) and status text updates.
Result:
- PASS
Notes:
- Works as expected.

### TC-UI-06 — Forms and CSS consistency
Checks:
- Inputs aligned, spacing consistent, buttons clickable, messages readable.
Result:
- PASS
Notes:
- No visual issues observed.

## Browser results

### Chrome
- Overall: PASS
- Issues found: None

### Firefox
- Overall: PASS
- Issues found: None

### Edge
- Overall: PASS
- Issues found: None

## Summary
- Manual UI tests completed in all major browsers.
- No functional or visual inconsistencies were found during the checks.
