var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var signup = require('./api/controllers/signup')
var login= require('./api/controllers/login')
var order= require('./api/controllers/order')
var orderlist= require('./api/controllers/orderlist')
var filter = require('./api/controllers/filter')
var app = express();
var additem = require('./api/controllers/additem')
var getitems = require('./api/controllers/itemlist')


app.use(bodyParser());
app.use(cors());
app.get('/filtrage',filter)
app.post('/signup', signup)
app.post('/login',login)
app.post('/order', order)
app.post('/additem', additem)
app.get('/getorders', orderlist)
app.get('/getitems',getitems)



mongoose
.connect(
    "mongodb+srv://hello:world@cluster0.foo8h.mongodb.net/d15?retryWrites=true&w=majority"
)
.then((db) => {
    console.log("Database connected");
})
.catch((err) => {});

app.listen(780);
