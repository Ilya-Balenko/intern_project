# Project Architecture

This project follows MVC and REST architectural principles to ensure clear separation of responsibilities and maintainable code structure.

## Overall Architecture

The application is built using Node.js and Express. Incoming HTTP requests are processed through a layered architecture where each layer has a single responsibility.

Request flow:
Client → Server → Middleware → Routes → Controllers → Services → Models → Database

## Components Description

### server.js / app.js
Entry point of the application. Initializes the Express app, connects middleware, registers routes, and starts the HTTP server.

### Routes
Define API endpoints and HTTP methods. Routes map incoming requests to corresponding controller functions.

### Controllers
Handle HTTP-level logic. Controllers read request parameters, validate input, call service functions, and return HTTP responses.

### Services
Contain business logic. Services process data, apply rules, and coordinate between controllers and data access layer.

### Models (Data Access Layer)
Responsible for database interaction. Models execute SQL queries and return data to services.

### Middleware
Intercept requests and responses. Used for error handling, request parsing, logging, and authentication.

### Utils
Helper functions that are reused across the application, such as input validation.

## REST Principles

The API follows REST conventions:
- Resources are accessed via URLs (e.g. /users)
- HTTP methods define actions (GET, POST)
- Data is exchanged in JSON format
