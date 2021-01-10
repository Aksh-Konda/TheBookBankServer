const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const suggestionsSchema = new Schema({
    subjectId: {
        type: ObjectId,
        ref: 'Subjects',
        required: true,
    },
    bookId: {
        type: ObjectId,
        ref: 'Books',
        required: true,
    },
    facaultyId: [{ type: ObjectId, ref: 'Faculty' }],
}, { timestamps: true });

const Suggestions = mongoose.model('Suggestions', suggestionsSchema);
exports.Suggestions = Suggestions;
