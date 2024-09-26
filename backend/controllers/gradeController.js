const { Grade } = require('../models/gradeModel');

const assignGrade = async (req, res, next) => {
  const { courseId, studentId, grade } = req.body;
  try {
    const newGrade = new Grade({ student: studentId, course: courseId, grade });
    await newGrade.save();
    res.status(200).json({ message: 'Grade assigned', newGrade });
  } catch (error) {
    next(error);
  }
};

module.exports = { assignGrade };
