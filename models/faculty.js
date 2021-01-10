const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const facultySchema = new Schema({
    facultyId: {
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
