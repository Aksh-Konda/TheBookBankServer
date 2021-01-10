const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const facultySchema = new Schema({
    facultyId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
    },
    address: {
        type: String,
    },
    subjects: [{ type: ObjectId, ref: 'Subject' }],
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);
exports.Faculty = Faculty;
