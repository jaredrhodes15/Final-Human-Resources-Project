var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
        //Need to fill this with the admin information.
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        joinDate: {
            type: Date,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        adminPrivileges: {
            type: Boolean
        } 
});

var User = mongoose.model('User', UserSchema);

module.exports = User;