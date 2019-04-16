const router = require("express").Router();
const addUser = require("../../controllers/UserController");

router.route("/")
    .get(addUser.findAll);

module.exports = router;
