const usersService = require('../services/usersService');
const validateUser = require('../utils/userValidator');

async function createUser(req, res, next) {
  const { name, email, password } = req.body;

  const validation = validateUser({ name, email, password });
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  try {
    const passwordHash = password; // позже bcrypt
    const id = await usersService.addUser({ name, email, passwordHash });
    res.status(201).json({ id });
  } catch (err) {
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    const { email, page = 1, limit = 10 } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const offset = (pageNumber - 1) * limitNumber;

    const users = await usersService.listUsers({
      email,
      limit: limitNumber,
      offset
    });

    res.json({
      data: users,
      pagination: { page: pageNumber, limit: limitNumber }
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { createUser, getUsers };