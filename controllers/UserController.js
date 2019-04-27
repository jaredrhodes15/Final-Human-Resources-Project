const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User.find({}, null, {sort: {username: 1}}, function (err, users) {
            if (!err) {
                console.log("Recieved");
                res.json(users);
            } else {
                console.error(err);
                res.json(err, "didn't work")
            }
        });
    },

    findById: function(req, res) {
        db.User.findById(req.params.id)
        .then( users => {
            res.status(200).json(users);
        })
        .catch(err => res.status(422).json(err));

    },

    createUser: function (req, res) {
        console.log(req.body)
        db.User.create({ 
            // id: req.body.id, 
            name: req.body.name, 
            position: req.body.position, 
            adminPrivileges: req.body.privileges 
        }, function (err, users) {
            if (!err) {
                console.log("Recieved post");
                res.json(users);
            } else {
                console.error(err);
                res.status(400).json(err);
            }
        });
        
    },

    updateUser: function (req, res) {
        db.User.findOneAndUpdate({_id: req.params.id}, function (err, users) {
            if (!err) {
                console.log("Recieved update");
                res.json(users);
            } else {
                console.error(err);
                res.json(err, "Update didn't work.");
            }
        });
    },

    deleteUser: function (req, res) {
        db.User.deleteOne({_id: req.params.id}, function (err, users) {
            if(!err) {
                console.log("Recieved delete");
                res.json(users);
            } else {
                console.error(err);
                res.json(err, "Delete didn't work.");
            }
        });
    }

}
