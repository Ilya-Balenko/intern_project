require('dotenv').config();

const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const pool = mysql.createPool(dbConfig);

//creating user
async function createUser(name, email, password_hash){
  try {
    const [result]=await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
      [name, email, password_hash]
    );
    return result.insertId;
  }catch (err){
    console.error('Error creating user:', err.message);
    throw err;
  }
}

//get all users
async function getUsers({email, limit, offset}){
  try{
    let sql='SELECT id, name, email, created_at FROM users';
    const params=[];

    if (email){
      sql+=' WHERE email =?';
      params.push(email);
    }
    sql+=' LIMIT ? OFFSET ?';
    params.push(limit, offset);
    const [rows] = await pool.query(sql, params);
    return rows;
  } catch (err){
    console.error('Error fetching users:', err.message);
    throw {status: 500, message: 'Database error' };
  }
}
module.exports = {pool,createUser,getUsers};

