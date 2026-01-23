# Project Requirements

## Project Goal

To develop a simple web application with user registration, authentication (login/logout), and content (posts/messages) creation and viewing.  
The system should be user-friendly and easy to maintain from an administrator’s perspective.

---

## Core Functionality

- User registration
- User authentication (login / logout)
- Creating posts
- Viewing a list of posts
- Basic input validation and error handling
- Basic administrative actions (view users, delete content)

---

## User Stories

### User

- As a user, I want to register in the system so that I can create my own account.
- As a user, I want to log in so that I can access my account.
- As a user, I want to log out to keep my account secure.
- As a user, I want to create a new post to share information.
- As a user, I want to see a list of all posts so that I can read them.

### Administrator

- As an administrator, I want to view the list of all users so that I can manage the system.
- As an administrator, I want to delete inappropriate posts to maintain content quality.

---

## Actors

- User
- Administrator

---

## Use Case List

### User

- Register
- Log in
- Log out
- Create post
- View posts

### Administrator

- View users
- Delete posts

---

## Notes

- User data is stored in a database
- Passwords are stored securely using hashing
- The system must provide proper validation and error handling
