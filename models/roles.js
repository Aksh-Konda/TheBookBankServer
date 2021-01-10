const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissionsSchema = new Schema({
    addBook: {
        type: Boolean,
        required: true,
        default: false,
    },
    updateBook: {
        type: Boolean,
        required: true,
        default: false,
    },
    addUser: {
        type: Boolean,
        required: true,
        default: false,
    },
    updateUser: {
        type: Boolean,
        required: true,
        default: false,
    }
});


const rolesSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    permissions: permissionsSchema,
}, { timestamps: true });

const Roles = mongoose.model('Roles', rolesSchema);
exports.Roles = Roles;
