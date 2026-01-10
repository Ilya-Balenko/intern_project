const pool=require('../db/index');
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
  }
  
module.exports = { createUser, getUsers };
