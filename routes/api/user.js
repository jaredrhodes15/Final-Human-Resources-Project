const express = require("express");
const router = require("express").Router();
const addUser = require("../../controllers/UserController");

const app = express();

app.route("/")
    .get(function (req, res) {
        res.send(addUser.findAll);
    });


app.route("/api/create")
    .post(function(req, res) {
        res.send(addUser.createUser);
    });

app.route("/api/:id")
    .get(function (req, res) {
        res.send(addUser.findById);
    });


app.route("/api/update")
    .put(function (req, res) {
        res.send(addUser.updateUser);
    })


app.route("/api/delete")
    .delete(function (req, res) {
        res.send(addUser.deleteUser);
    })


module.exports = app;
