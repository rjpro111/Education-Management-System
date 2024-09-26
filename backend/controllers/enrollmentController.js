const Course = require('../models/courseModel');
const User = require('../models/userModel');

const enrollStudent = async (req, res, next) => {
  const { courseId, studentId } = req.body;
  try {
    const course = await Course.findById(courseId);
    const student = await User.findById(studentId);

    if (!student || student.role !== 'Student') {
      return res.status(400).json({ message: 'Invalid student' });
    }

    if (course.students.includes(studentId)) {
      return res.status(400).json({ message: 'Student already enrolled' });
    }

    course.students.push(studentId);
    await course.save();
    res.status(200).json({ message: 'Student enrolled', course });
  } catch (error) {
    next(error);
  }
};

module.exports = { enrollStudent };
