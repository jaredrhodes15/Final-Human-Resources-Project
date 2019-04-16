var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HrScema = new Schema ({
    //Need to fill this with the HR information.
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
})

var Hr = mongoose.model('HR', HrScema);

module.exports = Hr;