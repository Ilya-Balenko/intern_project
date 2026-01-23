# Validation Rules
## User

name: minimum 2 characters

email: must contain @

password: minimum 6 characters

## Post

title: minimum 3 characters

content: must not be empty

## Log

level: allowed values

- info

- warn

- error
 
 action: must not be empty



# Error codes
| Code             | Description                       |
| ---------------- | --------------------------------- |
| VALIDATION_ERROR | Request data validation failed    |
| NOT_FOUND        | Requested resource not found      |
| DB_ERROR         | Database operation error          |
| UNAUTHORIZED     | Authentication required or failed |
| FORBIDDEN        | Access denied                     |
| INTERNAL_ERROR   | Unexpected server error           |
