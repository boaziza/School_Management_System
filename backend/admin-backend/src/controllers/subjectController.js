const subjectService = require('../services/subjectService');

async function createSubject(req, res) {
  try {
    const subject = await subjectService.createSubject(req.body);
    res.status(201).json({ message: 'Subject created', data: subject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllSubjects(req, res) {
  try {
    const subjects = await subjectService.getAllSubjects();
    res.status(200).json({ data: subjects });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getSubjectById(req, res) {
  try {
    const subject = await subjectService.getSubjectById(req.params.id);
    res.status(200).json({ data: subject });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

async function updateSubject(req, res) {
  try {
    const subject = await subjectService.updateSubject(req.params.id, req.body);
    res.status(200).json({ message: 'Subject updated', data: subject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteSubject(req, res) {
  try {
    const subject = await subjectService.deleteSubject(req.params.id);
    res.status(200).json({ message: 'Subject deleted', data: subject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject };
