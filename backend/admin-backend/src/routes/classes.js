const express          = require('express');
const router           = express.Router();
const classController  = require('../controllers/classController');
const { authenticate, authorize } = require('../middlewares/auth');

router.post('/',      authenticate, authorize('admin'), classController.createClass);
router.get('/',       authenticate, classController.getAllClasses);
router.get('/:id',    authenticate, classController.getClassById);
router.patch('/:id',  authenticate, authorize('admin'), classController.updateClass);
router.delete('/:id', authenticate, authorize('admin'), classController.deleteClass);

module.exports = router;
