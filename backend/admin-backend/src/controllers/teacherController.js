const teacherService = require('../services/teacherService');

async function createTeacher(req, res) {
  try {
    const teacher = await teacherService.createTeacher(req.body);
    res.status(201).json({ message: 'Teacher created', data: teacher });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllTeachers(req, res) {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.status(200).json({ data: teachers });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getTeacherById(req, res) {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);
    res.status(200).json({ data: teacher });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateTeacher(req, res) {
  try {
    const teacher = await teacherService.updateTeacher(req.params.id, req.body);
    res.status(200).json({ message: 'Teacher updated', data: teacher });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteTeacher(req, res) {
  try {
    const teacher = await teacherService.deleteTeacher(req.params.id);
    res.status(200).json({ message: 'Teacher deleted', data: teacher });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createTeacher, getAllTeachers, getTeacherById, updateTeacher, deleteTeacher };
