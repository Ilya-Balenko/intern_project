# Middleware design
## Validation middleware (User)
```js
function validateUser(req, res, next) {
  const { name, email, password } = req.body;
  const errors = [];

  if (!name || name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!email || !email.includes('@')) {
    errors.push('Invalid email format');
  }

  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: errors.join(', ')
      }
    });
  }

  next();
}
```
## Validation middleware (Post)at
```js
function validatePost(req, res, next) {
  const { title, content } = req.body;
  const errors = [];

  if (!title || title.length < 3) {
    errors.push('Title must be at least 3 characters');
  }

  if (!content) {
    errors.push('Content must not be empty');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: errors.join(', ')
      }
    });
  }

  next();
}
```
## Error handling middleware
```js
function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(400).json({
      error: {
        code: 'DB_ERROR',
        message: 'Duplicate entry'
      }
    });
  }

  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Internal server error'
    }
  });
}
```