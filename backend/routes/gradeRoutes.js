const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { assignGrade } = require('../controllers/gradeController');

const router = express.Router();

router.post('/assign', protect, authorize('Teacher'), assignGrade);

module.exports = router;
