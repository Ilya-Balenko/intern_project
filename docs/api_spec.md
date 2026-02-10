# API Specification

## Users API

### GET /users

| Item | Description |
|-----|------------|
| Method | GET |
| Route | /users |
| Description | Returns a list of users with optional filtering and pagination |

**Query Parameters**

| Name | Type | Required | Description |
|-----|------|----------|-------------|
| email | string | no | Filter users by email |
| page | number | no | Page number (default: 1) |
| limit | number | no | Items per page (default: 10) |

**Response (200)**

| Field | Type | Description |
|------|------|-------------|
| data | array | List of users |
| data.id | number | User ID |
| data.name | string | User name |
| data.email | string | User email |
| data.created_at | datetime | Creation date |
| pagination.page | number | Current page |
| pagination.limit | number | Items per page |

**Error Codes**

| Status | Meaning |
|------|---------|
| 500 | Internal server error |

---

### POST /users

| Item | Description |
|-----|------------|
| Method | POST |
| Route | /users |
| Description | Creates a new user |

**Request Body**

| Field | Type | Required | Description |
|------|------|----------|-------------|
| name | string | yes | User name |
| email | string | yes | User email |
| password | string | yes | User password |

**Response (201)**

| Field | Type | Description |
|------|------|-------------|
| id | number | Created user ID |

**Error Codes**

| Status | Meaning |
|------|---------|
| 400 | Validation error |
| 400 | Email already exists |
| 500 | Internal server error |

---

## Posts API (planned)

### POST /posts

| Item | Description |
|-----|------------|
| Method | POST |
| Route | /posts |
| Description | Creates a new post |

**Request Body**

| Field | Type | Required | Description |
|------|------|----------|-------------|
| title | string | yes | Post title |
| content | string | yes | Post content |
| user_id | number | yes | Author user ID |

**Response (201)**

| Field | Type | Description |
|------|------|-------------|
| id | number | Created post ID |

---

### GET /posts

| Item | Description |
|-----|------------|
| Method | GET |
| Route | /posts |
| Description | Returns a list of posts |

**Response (200)**

| Field | Type | Description |
|------|------|-------------|
| id | number | Post ID |
| title | string | Post title |
| content | string | Post content |
| user_id | number | Author user ID |
| created_at | datetime | Creation date |

---

## Logs API (planned)

### GET /logs

| Item | Description |
|-----|------------|
| Method | GET |
| Route | /logs |
| Description | Returns system logs (admin only) |

**Response (200)**

| Field | Type | Description |
|------|------|-------------|
| id | number | Log ID |
| action | string | Performed action |
| user_id | number | User ID |
| created_at | datetime | Creation date |
