const validatePost = require('../src/utils/postValidator');

describe('validatePost', () => {

  test('valid post passes validation', () => {
    const result = validatePost({
      title: 'Hello',
      content: 'Post content',
      user_id: 1
    });

    expect(result.valid).toBe(true);
  });

  test('fails with short title', () => {
    const result = validatePost({
      title: 'Hi',
      content: 'Post content',
      user_id: 1
    });

    expect(result.valid).toBe(false);
  });

  test('fails with empty content', () => {
    const result = validatePost({
      title: 'Valid title',
      content: '',
      user_id: 1
    });

    expect(result.valid).toBe(false);
  });

  test('fails with invalid user_id', () => {
    const result = validatePost({
      title: 'Valid title',
      content: 'Text',
      user_id: 'one'
    });

    expect(result.valid).toBe(false);
  });

});
