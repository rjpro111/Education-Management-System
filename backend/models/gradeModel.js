const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  grade: { type: Number, required: true },
});

const submissionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  assignment: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now },
});

const Grade = mongoose.model('Grade', gradeSchema);
const Submission = mongoose.model('Submission', submissionSchema);

module.exports = { Grade, Submission };
