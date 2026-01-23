const pool = require('../db/index');

/*
  Post model

  Fields:
  - id
  - user_id (FK -> users.id)
  - title
  - content
  - created_at
*/

// create new post
async function createPost(user_id, title, content) {
  try {
    const [result] = await pool.query(
      'INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)',
      [user_id, title, content]
    );
    return result.insertId;
  } catch (err) {
    console.error('Error creating post:', err.message);
    throw err;
  }
}

// get all posts
async function getPosts({ user_id, limit, offset }) {
  let sql = `
    SELECT p.id, p.title, p.content, p.created_at, u.name AS author
    FROM posts p
    JOIN users u ON p.user_id = u.id
  `;
  const params = [];

  if (user_id) {
    sql += ' WHERE p.user_id = ?';
    params.push(user_id);
  }

  sql += ' ORDER BY p.created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  const [rows] = await pool.query(sql, params);
  return rows;
}

// delete post (admin)
async function deletePost(postId) {
  const [result] = await pool.query(
    'DELETE FROM posts WHERE id = ?',
    [postId]
  );
  return result.affectedRows;
}

module.exports = {
  createPost,
  getPosts,
  deletePost
};