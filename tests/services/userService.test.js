const usersModel = require('../../src/models/usersModel');
const { addUser, listUsers } = require('../../src/services/usersService');

jest.mock('../../src/models/usersModel');

describe('userService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('addUser', () => {
    test('should create user with valid data', async () => {
      usersModel.createUser.mockResolvedValue({
        id: 1,
        name: 'John'
      });

      const result = await addUser({
        name: 'John',
        email: 'john@test.com',
        passwordHash: 'hash'
      });

      expect(usersModel.createUser).toHaveBeenCalledWith(
        'John',
        'john@test.com',
        'hash'
      );
      expect(result.id).toBe(1);
    });

    test('should throw error if model fails', async () => {
      usersModel.createUser.mockRejectedValue(
        new Error('DB error')
      );

      await expect(
        addUser({
          name: 'John',
          email: 'john@test.com',
          passwordHash: 'hash'
        })
      ).rejects.toThrow('DB error');
    });
  });

  describe('listUsers', () => {
    test('should return users list', async () => {
      usersModel.getUsers.mockResolvedValue([
        { id: 1, email: 'a@test.com' }
      ]);

      const result = await listUsers({
        email: null,
        limit: 10,
        offset: 0
      });

      expect(usersModel.getUsers).toHaveBeenCalledWith({
        email: null,
        limit: 10,
        offset: 0
      });
      expect(Array.isArray(result)).toBe(true);
    });

    test('should throw error if model fails', async () => {
      usersModel.getUsers.mockRejectedValue(
        new Error('DB error')
      );

      await expect(
        listUsers({ email: null, limit: 10, offset: 0 })
      ).rejects.toThrow('DB error');
    });
  });
});
