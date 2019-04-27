require('dotenv').config()
var express = require("express");
const router = require("express").Router();
var mongoose = require("mongoose");
const routes = require("./routes");

// var axios = require("axios");

var PORT = 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);

mongoose.connect("mongodb://localhost/Final-Project", { useNewUrlParser: true });

app.listen(PORT, function () {
    console.log("App is running on " + PORT + "!");
});
