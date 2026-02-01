const errorHandler = require('../../src/middleware/errorHandler');

describe('errorHandler middleware', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('returns 500 and unified error structure', () => {
    const err = new Error('Boom');

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong'
      }
    });
  });
});
