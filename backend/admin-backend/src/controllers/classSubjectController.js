const classSubjectService = require('../services/classSubjectService');

async function assign(req, res) {
  try {
    const cs = await classSubjectService.assign(req.body);
    res.status(201).json({ message: 'Teacher assigned to subject', data: cs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getById(req, res) {
  try {
    const cs = await classSubjectService.getById(req.params.id);
    res.status(200).json({ data: cs });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function getByClass(req, res) {
  try {
    const list = await classSubjectService.getByClass(req.params.classId);
    res.status(200).json({ data: list });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getByTeacher(req, res) {
  try {
    const list = await classSubjectService.getByTeacher(req.params.teacherId);
    res.status(200).json({ data: list });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function remove(req, res) {
  try {
    const cs = await classSubjectService.remove(req.params.id);
    res.status(200).json({ message: 'Removed', data: cs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { assign, getById, getByClass, getByTeacher, remove };
