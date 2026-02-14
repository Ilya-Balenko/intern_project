const logger = require('../utils/logger');

function errorHandler(err, req, res, next) {
logger.error('Unhandled error', {
  message: err.message,
  code: err.code,
  stack: err.stack,
  method: req.method,
  path: req.path,
  ip: req.ip
});


  // MySQL duplicate key (e.g., users.email UNIQUE)
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(400).json({
      error: {
        code: 'DB_ERROR',
        message: 'Email already exists'
      }
    });
  }

  return res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Something went wrong'
    }
  });
}

module.exports = errorHandler;
