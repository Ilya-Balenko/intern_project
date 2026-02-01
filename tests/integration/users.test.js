const request = require('supertest');
const app = require('../../src/app');
const { cleanup, close } = require('../helpers/dbCleanup');

describe('Users API (integration)', () => {
  afterEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await close();
  });

  test('POST /users → GET /users', async () => {
    const user = {
      name: 'Integration User',
      email: 'integration@test.com',
      password: 'secret123',
    };

    // CREATE USER
    const createRes = await request(app)
      .post('/users')
      .send(user);

    // если вдруг снова будет 400 — это сразу видно
    if (![200, 201].includes(createRes.status)) {
      console.log('POST /users failed:', createRes.status, createRes.body);
    }

    expect([200, 201]).toContain(createRes.status);

    // GET USERS
    const listRes = await request(app).get('/users');
    expect(listRes.status).toBe(200);

    // поддержка разных форматов ответа
    const users =
      Array.isArray(listRes.body)
        ? listRes.body
        : Array.isArray(listRes.body.users)
        ? listRes.body.users
        : Array.isArray(listRes.body.data)
        ? listRes.body.data
        : [];

    expect(Array.isArray(users)).toBe(true);

    const emails = users.map(u => u.email);
    expect(emails).toContain(user.email);
  });

  test('POST /users with invalid password → 400', async () => {
    const badUser = {
      name: 'Bad User',
      email: 'bad@test.com',
      password: '123', // < 6
    };

    const res = await request(app)
      .post('/users')
      .send(badUser);

    expect(res.status).toBe(400);
  });
});
