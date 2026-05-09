const pool = require('../config/db');

async function assign(data) {
  const result = await pool.query(
    `INSERT INTO class_subjects (class_id, subject_id, teacher_id)
     VALUES ($1, $2, $3)
     ON CONFLICT (class_id, subject_id) DO UPDATE SET teacher_id = $3
     RETURNING *`,
    [data.class_id, data.subject_id, data.teacher_id]
  );
  return result.rows[0];
}

async function findById(id) {
  const result = await pool.query(
    `SELECT cs.*, c.name AS class_name, s.name AS subject_name,
            u.first_name AS teacher_first, u.last_name AS teacher_last
     FROM class_subjects cs
     JOIN classes c  ON cs.class_id   = c.id
     JOIN subjects s ON cs.subject_id = s.id
     LEFT JOIN teachers t ON cs.teacher_id = t.id
     LEFT JOIN users u    ON t.user_id     = u.id
     WHERE cs.id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

async function findByClass(classId) {
  const result = await pool.query(
    `SELECT cs.*, s.name AS subject_name, s.code,
            u.first_name AS teacher_first, u.last_name AS teacher_last
     FROM class_subjects cs
     JOIN subjects s ON cs.subject_id = s.id
     LEFT JOIN teachers t ON cs.teacher_id = t.id
     LEFT JOIN users u    ON t.user_id     = u.id
     WHERE cs.class_id = $1`,
    [classId]
  );
  return result.rows;
}

async function findByTeacher(teacherId) {
  const result = await pool.query(
    `SELECT cs.*, c.name AS class_name, s.name AS subject_name
     FROM class_subjects cs
     JOIN classes c  ON cs.class_id   = c.id
     JOIN subjects s ON cs.subject_id = s.id
     WHERE cs.teacher_id = $1`,
    [teacherId]
  );
  return result.rows;
}

async function remove(id) {
  const result = await pool.query(
    'DELETE FROM class_subjects WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
}

module.exports = { assign, findById, findByClass, findByTeacher, remove };
