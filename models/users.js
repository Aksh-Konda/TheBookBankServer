const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    userId: { 
        type: ObjectId,
        unique: true,
        required: true,
    },
    roleId: {
        type: ObjectId,
        required: true,
        ref: 'Roles'
    },
    emailId: {
        type: String,
        unique: true,
        required: true,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const Users = mongoose.model('Users', userSchema);
exports.Users = Users;
