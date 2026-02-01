function validateLog({ level, message, user_id }) {
  const allowedLevels = ['info', 'warn', 'error'];

  if (!allowedLevels.includes(level)) {
    return { valid: false, message: 'Invalid log level' };
  }

  if (!message || message.length === 0) {
    return { valid: false, message: 'Message is required' };
  }

  if (user_id !== undefined && typeof user_id !== 'number') {
    return { valid: false, message: 'Invalid user_id' };
  }

  return { valid: true };
}

module.exports = validateLog;
