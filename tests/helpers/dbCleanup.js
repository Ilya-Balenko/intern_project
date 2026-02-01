const pool = require('../../src/db/index');

async function cleanup() {
  // Отключаем FK, чистим, включаем обратно
  await pool.query('SET FOREIGN_KEY_CHECKS = 0;');
  await pool.query('TRUNCATE TABLE logs;');
  await pool.query('TRUNCATE TABLE posts;');
  await pool.query('TRUNCATE TABLE users;');
  await pool.query('SET FOREIGN_KEY_CHECKS = 1;');
}

async function close() {
  await pool.end();
}

module.exports = { cleanup, close };
