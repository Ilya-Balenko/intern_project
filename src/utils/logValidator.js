function validateLog({ user_id, action, ip_address }) {
  if (!action || typeof action !== 'string' || action.trim().length === 0) {
    return { valid: false, message: 'Action is required' };
  }

  if (user_id !== undefined && user_id !== null) {
    const id = Number(user_id);
    if (!Number.isInteger(id) || id <= 0) {
      return { valid: false, message: 'Invalid user_id' };
    }
  }

  if (
    !ip_address ||
    typeof ip_address !== 'string' ||
    ip_address.trim().length === 0 ||
    ip_address.length > 45
  ) {
    return { valid: false, message: 'Invalid ip_address' };
  }

  return { valid: true };
}

module.exports = validateLog;
