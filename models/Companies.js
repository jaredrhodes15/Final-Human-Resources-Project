var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompanySchema = new Schema ({
    //Need to fill this with the admin information.
    name: {
        type: String,
        required: true
    },
    
    employees: [ 
        {
        type: Schema.Types.ObjectId,
        ref: "User"
        } 
    ]
});

var Company = mongoose.model('company', CompanySchema);

module.exports = Company;