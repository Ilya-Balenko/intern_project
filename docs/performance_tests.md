# Performance Tests and Optimization (4.6)

Date: 2026-01-30  
Project: intern_project  
Tool: autocannon  
API base URL: http://localhost:3000  
Database: MySQL (InnoDB)

## Goal
The goal of this performance testing was to evaluate the responsiveness,
throughput, and stability of the API under concurrent load, and to verify
that database indexing supports efficient request handling.

## Test setup
- Endpoint tested: GET /users
- Test duration: 15 seconds
- Concurrency level: 50
- Environment: local development
- Database state: users.email column indexed

## Database indexing
The `users.email` column is indexed (previously as a UNIQUE index).
This index improves lookup performance by avoiding full table scans
when accessing user records.

## Command used
```bash
npx autocannon -c 50 -d 15 http://localhost:3000/users
```
## Results (with index)
### GET /users

Concurrency: 50
Duration: 15 seconds

- Average latency: ~24 ms

- p97.5 latency: ~32 ms

- p99 latency: ~35 ms

- Maximum latency: ~117 ms

- Throughput: ~2 050 requests/sec

- Total requests: ~31 000

- Errors: 0

## Analysis

The results show low average latency and stable throughput under concurrent load.
The presence of an index on the *users.email* column helps ensure efficient data
access and prevents performance degradation caused by full table scans.
No errors were observed during the test run, indicating stable API behavior.

## Conclusion

The GET /users endpoint demonstrates good performance and stability under load.
Proper indexing of frequently used fields (such as email) contributes to low
response times and reliable throughput. Further performance testing can be
performed after adding new endpoints or increasing data volume.