# Deployment Instructions

This document describes how to run the project using Docker.

## Requirements
- Docker Desktop installed
- MySQL database running (local or remote)

## Environment variables
Create a `.env` file based on `.env.example`.

Required:
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

### Local MySQL + Docker on Windows
When running the API inside Docker but MySQL is running on the host machine,
set the database host to:

```
DB_HOST=host.docker.internal
```

This allows the container to access the host network.

## Build Docker image
From the project root:

```bash
docker build -t intern-project .
```

## Run container
Run with environment variables from `.env`:

```bash
docker run --name intern-project -p 3000:3000 --env-file .env intern-project
```

If the container name already exists:

```bash
docker rm -f intern-project
```

## Verify
Open in browser or use curl:

- `http://localhost:3000/users`

Expected response example:

```json
{
  "data": [],
  "pagination": { "page": 1, "limit": 10 }
}
```

## Notes
- The container exposes port `3000`.
- The database must be reachable from the container.
