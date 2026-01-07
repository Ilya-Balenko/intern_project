const request = require('supertest');
const app = require('../src/server');

describe('Users API', () => {

  test('GET /users returns 200', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /users fails with invalid data', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'A',
        email: 'wrong',
        password: '123'
      });

    expect(res.statusCode).toBe(400);
  });

});