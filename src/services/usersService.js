const usersModel = require('../models/usersModel');

async function addUser({ name, email, passwordHash }) {
  return usersModel.createUser(name, email, passwordHash);
}

async function listUsers({ email, limit, offset }) {
  return usersModel.getUsers({ email, limit, offset });
}

module.exports = { addUser, listUsers };