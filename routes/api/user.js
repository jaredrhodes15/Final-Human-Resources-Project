const router = require("express").Router();
const addUser = require("../../controllers/UserController");

router.route("/")
    .get(addUser.findAll);

router.route("/api/create")
    .post(addUser.createUser);

router.route("/api/:id")
    .get(addUser.findById)

router.route("/api/update")
    .put(addUser.updateUser);

routere.route("/api/delete")
    .delete(addUser.deleteUser);

module.exports = router;
