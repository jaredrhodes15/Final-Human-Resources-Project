const router = require("express").Router();
const addUser = require("../../controllers/UserController");

router.route("/")
    .get(addUser.findAll)
    .post(addUser.createUser);

router.route("/api/user")
    // .get(addUser.findById)
    .put(addUser.updateUser)
    .delete(addUser.deleteUser);

module.exports = router;
