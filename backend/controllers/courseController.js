const Course = require('../models/courseModel');
const User = require('../models/userModel');

const createCourse = async (req, res, next) => {
  const { title, description, startDate, endDate, teacherId } = req.body;
  try {
    const teacher = await User.findById(teacherId);
    if (!teacher || teacher.role !== 'Teacher') {
      return res.status(400).json({ message: 'Invalid teacher' });
    }
    const course = new Course({ title, description, startDate, endDate, teacher });
    await course.save();
    res.status(201).json({ message: 'Course created', course });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCourse };
