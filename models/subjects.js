const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Subjects = mongoose.model('Subjects', subjectSchema);
exports.Subjects = Subjects;
