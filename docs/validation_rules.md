# Validation Rules

This document describes the validation rules currently enforced by the application before data is written to the database.

---

## User Validation

- **name**  
  - Must be at least 2 characters long.

- **email**  
  - Must match a valid email format (validated using a regular expression).

- **password**  
  - Must be at least 6 characters long.

Validation is performed in the controller layer using reusable validator functions.

---

## Post Validation (Planned)

Not fully implemented at the current stage.

Intended rules:

- **title** — minimum 3 characters  
- **content** — must not be empty  

These rules will be enforced once the Posts API is implemented.

---

## Log Validation (Planned)

Log validation will apply when the logging API is exposed.

Expected fields:

- **action** — required  
- **user_id** — must be a number if provided  
- **ip_address** — recorded automatically  

---

# Error Codes

The API uses a simplified and consistent error response format.

| Code | Description |
|--------|----------------|
| VALIDATION_ERROR | Request data validation failed |
| DB_ERROR | Database operation error (e.g., duplicate entry) |
| INTERNAL_ERROR | Unexpected server error |

---

## Notes

- Validation occurs before database operations.
- Error responses follow a unified JSON structure.
- Additional error codes may be introduced as the system expands.
