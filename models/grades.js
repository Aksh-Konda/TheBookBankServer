const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const gradeSchema = new Schema({
    branch: { 
        type: String,
        required: true,
    },
    year: {
        type: Number,
        ref: 'Roles',
        required: true
    },
    semester: {
        type: Number,
        required: true,
    },
    academicYearFrom: {
        type: Number,
        required: true,
        min: 2009
    },
    academicYearTo: {
        type: Number,
        required: true,
        min: 2011
    },
    subjects: [{ type: ObjectId, ref: 'Subjects' }]
}, { timestamps: true });

const Grades = mongoose.model('Grades', gradeSchema);
exports.Grades = Grades;
