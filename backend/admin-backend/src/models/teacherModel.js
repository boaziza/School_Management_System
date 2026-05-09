const pool = require('../config/db');

async function create(data) {
  const result = await pool.query(
    `INSERT INTO teachers (user_id, employee_number, department)
     VALUES ($1, $2, $3) RETURNING *`,
    [data.user_id, data.employee_number, data.department]
  );
  return result.rows[0];
}

async function findById(id) {
  const result = await pool.query(
    `SELECT t.*, u.first_name, u.last_name, u.email, u.phone
     FROM teachers t JOIN users u ON t.user_id = u.id
     WHERE t.id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

async function findByUserId(userId) {
  const result = await pool.query(
    'SELECT * FROM teachers WHERE user_id = $1',
    [userId]
  );
  return result.rows[0] || null;
}

async function findAll() {
  const result = await pool.query(
    `SELECT t.*, u.first_name, u.last_name, u.email, u.phone
     FROM teachers t JOIN users u ON t.user_id = u.id
     ORDER BY u.last_name ASC`
  );
  return result.rows;
}

async function update(id, data) {
  const result = await pool.query(
    `UPDATE teachers SET department = $1 WHERE id = $2 RETURNING *`,
    [data.department, id]
  );
  return result.rows[0] || null;
}

async function remove(id) {
  const result = await pool.query(
    'DELETE FROM teachers WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}

module.exports = { create, findById, findByUserId, findAll, update, remove };
