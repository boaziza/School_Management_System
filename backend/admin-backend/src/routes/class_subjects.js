const express                = require('express');
const router                 = express.Router();
const classSubjectController = require('../controllers/classSubjectController');
const { authenticate, authorize } = require('../middlewares/auth');

router.post('/',                        authenticate, authorize('admin'), classSubjectController.assign);
router.get('/:id',                      authenticate, classSubjectController.getById);
router.get('/class/:classId',           authenticate, classSubjectController.getByClass);
router.get('/teacher/:teacherId',       authenticate, classSubjectController.getByTeacher);
router.delete('/:id',                   authenticate, authorize('admin'), classSubjectController.remove);

module.exports = router;
