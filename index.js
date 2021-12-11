var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var signup = require('./api/controllers/signup');
var login= require('./api/controllers/login');
var getitems = require('./api/controllers/itemlist');
var app = express();


app.use(bodyParser());
app.use(cors());

app.post('/signup', signup);
app.post('/login',login);
app.get('/getitems',getitems);


mongoose
.connect(
    "mongodb+srv://hello:world@cluster0.foo8h.mongodb.net/d15?retryWrites=true&w=majority"
)
.then((db) => {
    console.log("Database connected");
})
.catch((err) => {});

app.listen(780);
