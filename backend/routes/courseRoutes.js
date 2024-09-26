const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { createCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/create', protect, authorize('Admin'), createCourse);

module.exports = router;
