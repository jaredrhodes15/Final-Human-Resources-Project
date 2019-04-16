var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminSchema = new Schema ({
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
        
        //Need to add more?

});

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;