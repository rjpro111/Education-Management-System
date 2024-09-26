const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { enrollStudent } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/enroll', protect, authorize('Admin', 'Teacher'), enrollStudent);

module.exports = router;
