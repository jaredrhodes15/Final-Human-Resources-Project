var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
        //Need to fill this with the admin information.
        name: {
            type: String,
            required: true
        },   
        position: {
            type: String,
            required: true
        },
        adminPrivileges: {
            type: Boolean
        } 
});

var User = mongoose.model('User', UserSchema);

module.exports = User;