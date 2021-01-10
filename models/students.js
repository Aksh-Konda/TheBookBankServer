const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const studentSchema = new Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        first: {
            type: String,
            required: true,
            trim: true,
        },
        last: {
            type: String,
            required: true,
            trim: true,
        },
    },
    emailId: {
        type: String,
    },
    address: {
        type: String,
    },
    grade: [{ type: ObjectId, ref: 'Grades' }],
}, { timestamps: true });

const Students = mongoose.model('Students', studentSchema);
exports.Students = Students;
