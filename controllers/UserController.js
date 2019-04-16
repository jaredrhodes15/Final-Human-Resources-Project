const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User.find({}, function (err, docs) {
            if (!err) {
                console.log("recieved");
                res.json(docs);
            } else {
                console.error(err);
                res.json(err, "didn't work")
            }
        })
    }
}
