const validateUser = require('../src/utils/userValidator');

describe('validateUser', () => {

  test('valid data passes validation', () => {
    const result = validateUser({
      name: 'Anna',
      email: 'anna@test.com',
      password: '123456'
    });

    expect(result.valid).toBe(true);
  });

  test('fails with short name', () => {
    const result = validateUser({
      name: 'A',
      email: 'anna@test.com',
      password: '123456'
    });

    expect(result.valid).toBe(false);
  });

  test('fails with invalid email', () => {
    const result = validateUser({
      name: 'Anna',
      email: 'wrong-email',
      password: '123456'
    });

    expect(result.valid).toBe(false);
  });

  test('fails with short password', () => {
    const result = validateUser({
      name: 'Anna',
      email: 'anna@test.com',
      password: '123'
    });

    expect(result.valid).toBe(false);
  });

});