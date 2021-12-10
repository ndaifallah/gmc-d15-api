var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var app = express();


app.use(bodyParser());
app.use(cors());


mongoose
.connect(
    "mongodb+srv://hello:world@cluster0.foo8h.mongodb.net/d15?retryWrites=true&w=majority"
)
.then((db) => {
    console.log("Database connected");
})
.catch((err) => {});

app.listen(780);
