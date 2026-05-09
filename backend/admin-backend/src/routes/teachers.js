const express            = require('express');
const router             = express.Router();
const teacherController  = require('../controllers/teacherController');
const { authenticate, authorize } = require('../middlewares/auth');

router.post('/',      authenticate, authorize('admin'), teacherController.createTeacher);
router.get('/',       authenticate, authorize('admin'), teacherController.getAllTeachers);
router.get('/:id',    authenticate, teacherController.getTeacherById);
router.patch('/:id',  authenticate, authorize('admin'), teacherController.updateTeacher);
router.delete('/:id', authenticate, authorize('admin'), teacherController.deleteTeacher);

module.exports = router;
