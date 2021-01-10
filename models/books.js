const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        unique: true,
    },
    authors: [{ type: String }],
    contents: {
        type: String,
    },
}, { timestamps: true });

const Books = mongoose.model('Books', bookSchema);
exports.Books = Books;
