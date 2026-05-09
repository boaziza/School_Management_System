const pool = require('../config/db');

async function create(data) {
  const result = await pool.query(
    `INSERT INTO classes (name, grade_level, academic_year)
     VALUES ($1, $2, $3) RETURNING *`,
    [data.name, data.grade_level, data.academic_year]
  );
  return result.rows[0];
}

async function findById(id) {
  const result = await pool.query(
    'SELECT * FROM classes WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
}

async function findAll() {
  const result = await pool.query(
    'SELECT * FROM classes ORDER BY grade_level ASC'
  );
  return result.rows;
}

async function update(id, data) {
  const result = await pool.query(
    `UPDATE classes SET name = $1, grade_level = $2, academic_year = $3
     WHERE id = $4 RETURNING *`,
    [data.name, data.grade_level, data.academic_year, id]
  );
  return result.rows[0] || null;
}

async function remove(id) {
  const result = await pool.query(
    'DELETE FROM classes WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}

module.exports = { create, findById, findAll, update, remove };
