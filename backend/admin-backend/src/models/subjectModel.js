const pool = require('../config/db');

async function create(data) {
  const result = await pool.query(
    `INSERT INTO subjects (name, code, description)
     VALUES ($1, $2, $3) RETURNING *`,
    [data.name, data.code, data.description]
  );
  return result.rows[0];
}

async function findById(id) {
  const result = await pool.query(
    'SELECT * FROM subjects WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
}

async function findAll() {
  const result = await pool.query(
    'SELECT * FROM subjects ORDER BY name ASC'
  );
  return result.rows;
}

async function update(id, data) {
  const result = await pool.query(
    `UPDATE subjects SET name = $1, code = $2, description = $3
     WHERE id = $4 RETURNING *`,
    [data.name, data.code, data.description, id]
  );
  return result.rows[0] || null;
}

async function remove(id) {
  const result = await pool.query(
    'DELETE FROM subjects WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}

module.exports = { create, findById, findAll, update, remove };
