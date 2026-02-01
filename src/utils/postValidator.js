function validatePost({ title, content, user_id }) {
  if (!title || title.length < 3) {
    return { valid: false, message: 'Title must be at least 3 characters' };
  }

  if (!content || content.length === 0) {
    return { valid: false, message: 'Content is required' };
  }

  if (!user_id || typeof user_id !== 'number') {
    return { valid: false, message: 'Invalid user_id' };
  }

  return { valid: true };
}

module.exports = validatePost;
