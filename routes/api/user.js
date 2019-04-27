// const express = require("express");
const router = require("express").Router();
const addUser = require("../../controllers/UserController");

// const app = express();

router.route("/")
    .get(addUser.findAll);


router.route("/create")
    .post(addUser.createUser);

router.route("/api/:id")
    .get(addUser.findById);


router.route("/api/update")
    .put(addUser.updateUser);

router.route("/api/delete")
    .delete(addUser.deleteUser);

module.exports = router;
