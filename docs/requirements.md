# Project Requirements

## Project Goal

To develop a simple web application that supports user management and provides
a foundation for authentication and content features.  
The system is designed to be maintainable and easy to extend.

---

## Implementation Status

### ✅ Implemented
- User registration
- Viewing a list of users
- Basic input validation
- Error handling
- REST API structure
- Layered architecture (controllers → services → models)
- MySQL database integration

### 🚧 Planned / Not Implemented Yet
- User authentication (login / logout)
- Password hashing
- Creating posts
- Viewing posts
- Administrative actions (delete content)
- Role-based access (admin/user)

---

## Core Functionality (Current Scope)

- User registration
- Retrieving users via API
- Validation and error handling
- Structured backend architecture

---

## User Stories

### Current

- As a user, I want to register so that I can create an account.
- As a system administrator, I want to view users to monitor the system.

### Planned

- As a user, I want to log in so that I can access my account.
- As a user, I want to log out to keep my account secure.
- As a user, I want to create posts to share information.
- As a user, I want to view posts.
- As an administrator, I want to delete inappropriate posts.

---

## Actors

- User
- Administrator (planned)

---

## Notes

- User data is stored in a MySQL database.
- Validation is performed before data is written to the database.
- The architecture is designed to support future authentication and content features.
