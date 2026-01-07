const { createUser, getUsers } = require('../db');

async function listUsers({ email, limit, offset }) {
  return await getUsers({ email, limit, offset });
}

async function addUser({ name, email, passwordHash }) {
  return await createUser(name, email, passwordHash);
}

module.exports = { listUsers, addUser };