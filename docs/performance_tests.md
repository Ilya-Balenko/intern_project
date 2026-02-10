# Performance Tests (4.6)

Date: 2026-01-30  
Project: intern_project  
Tool: autocannon  
API base URL: http://localhost:3000  
Database: MySQL (InnoDB)

## Goal
The goal of this performance test was to evaluate the responsiveness,
throughput, and stability of the API under concurrent load, and to confirm
that database indexing supports efficient user lookups.

## Test setup
- Endpoint tested: GET /users
- Test duration: 15 seconds
- Concurrency level: 50
- Environment: local development
- Database state: users table populated with test data
- Indexing: UNIQUE index on `users.email`

## Database indexing
The `users.email` column is configured with a UNIQUE index.  
This improves query performance when filtering users by email and prevents
duplicate records, ensuring both data integrity and efficient lookups.

## Command used
```bash
npx autocannon -c 50 -d 15 http://localhost:3000/users
```

## Results

### GET /users

- Concurrency: 50  
- Duration: 15 seconds  
- Average latency: ~24 ms  
- p97.5 latency: ~32 ms  
- p99 latency: ~35 ms  
- Maximum latency: ~117 ms  
- Throughput: ~2 050 requests/sec  
- Total requests: ~31 000  
- Errors: 0  

## Analysis
The endpoint handled concurrent requests with low latency and no observed
errors, indicating stable behavior under moderate load.

While the GET /users endpoint primarily returns a list of users, the presence
of a UNIQUE index on `email` ensures efficient performance for queries that
filter by this field and helps avoid full table scans.

These results represent a baseline performance check performed in a local
development environment rather than a production-level benchmark.

## Conclusion
The GET /users endpoint demonstrates stable performance under concurrent load.
Proper indexing of frequently queried fields such as `email` contributes to
efficient data access and maintains overall API responsiveness.

Further performance testing is recommended after increasing dataset size,
adding new endpoints, or deploying to a production-like environment.
