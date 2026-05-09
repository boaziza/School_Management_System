const classService = require('../services/classService');

async function createClass(req, res) {
  try {
    const cls = await classService.createClass(req.body);
    res.status(201).json({ message: 'Class created', data: cls });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllClasses(req, res) {
  try {
    const classes = await classService.getAllClasses();
    res.status(200).json({ data: classes });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getClassById(req, res) {
  try {
    const cls = await classService.getClassById(req.params.id);
    res.status(200).json({ data: cls });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateClass(req, res) {
  try {
    const cls = await classService.updateClass(req.params.id, req.body);
    res.status(200).json({ message: 'Class updated', data: cls });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteClass(req, res) {
  try {
    const cls = await classService.deleteClass(req.params.id);
    res.status(200).json({ message: 'Class deleted', data: cls });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createClass, getAllClasses, getClassById, updateClass, deleteClass };
