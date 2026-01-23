const pool = require('../db/index');

/*
  Log model

  Fields:
  - id
  - user_id (FK -> users.id, nullable)
  - action
  - ip_address
  - created_at
*/

// create log entry
async function createLog(user_id, action, ip_address) {
  try {
    const [result] = await pool.query(
      'INSERT INTO logs (user_id, action, ip_address) VALUES (?, ?, ?)',
      [user_id, action, ip_address]
    );
    return result.insertId;
  } catch (err) {
    console.error('Error creating log:', err.message);
    throw err;
  }
}

// get logs (admin)
async function getLogs({ limit, offset }) {
  const sql = `
    SELECT l.id, l.action, l.ip_address, l.created_at, u.email
    FROM logs l
    LEFT JOIN users u ON l.user_id = u.id
    ORDER BY l.created_at DESC
    LIMIT ? OFFSET ?
  `;

  const [rows] = await pool.query(sql, [limit, offset]);
  return rows;
}

module.exports = {
  createLog,
  getLogs
};