# Project Summary

In this project, I built a structured Node.js/Express backend application with a layered architecture.

I configured environment variables using **.env** and established a MySQL connection via **mysql2/promise**, creating the schema for the **users** table with appropriate constraints.

Core functionality includes creating users and retrieving a paginated list of users with optional email filtering.  
Input validation is performed before database operations, and a centralized error handler ensures consistent API responses.

A UNIQUE constraint on the email field provides database-level protection against duplicate user records.

I implemented request logging middleware to improve observability and assist with debugging.

Unit tests were written using **Jest** for validation logic, and basic API tests were created with **Supertest**.

Additionally, I prepared supporting deliverables including a Postman collection, database schema and seed scripts, performance testing results, and technical documentation.
