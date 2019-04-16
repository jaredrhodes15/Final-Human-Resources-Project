var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManagerSchema = new Schema({
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

var Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;