const router = require("express").Router();
const addUser = require("../../controllers/UserController");

router.route("/")
    .findAll(addUser.findAll);

router.route("/api/create")
    .createUser(addUser.createUser);

router.route("/api/:id")
    .findById(addUser.findById)

router.route("/api/update")
    .updateUser(addUser.updateUser);

routere.route("/api/delete")
    .deleteUser(addUser.deleteUser);

module.exports = router;
