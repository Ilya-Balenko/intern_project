const validateLog = require('../src/utils/logValidator');

describe('validateLog', () => {

  test('valid log passes validation', () => {
    const result = validateLog({
      level: 'info',
      message: 'Something happened',
      user_id: 1
    });

    expect(result.valid).toBe(true);
  });

  test('fails with invalid level', () => {
    const result = validateLog({
      level: 'debug',
      message: 'Message',
      user_id: 1
    });

    expect(result.valid).toBe(false);
  });

  test('fails with empty message', () => {
    const result = validateLog({
      level: 'error',
      message: '',
      user_id: 1
    });

    expect(result.valid).toBe(false);
  });

  test('fails with invalid user_id', () => {
    const result = validateLog({
      level: 'warn',
      message: 'Warning',
      user_id: 'abc'
    });

    expect(result.valid).toBe(false);
  });

});
