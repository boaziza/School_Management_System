const express           = require('express');
const router            = express.Router();
const subjectController = require('../controllers/subjectController');
const { authenticate, authorize } = require('../middlewares/auth');

router.post('/',      authenticate, authorize('admin'), subjectController.createSubject);
router.get('/',       authenticate, subjectController.getAllSubjects);
router.get('/:id',    authenticate, subjectController.getSubjectById);
router.patch('/:id',  authenticate, authorize('admin'), subjectController.updateSubject);
router.delete('/:id', authenticate, authorize('admin'), subjectController.deleteSubject);

module.exports = router;
