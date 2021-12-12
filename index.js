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
var updatestatus= require('./api/controllers/updatestatus')
var updatedesc= require('./api/controllers/updatedescription')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



app.use(bodyParser());
app.use(cors());
app.get('/filtrage',filter)
app.post('/signup', signup)
app.post('/login',login)
app.post('/order', order)
app.post('/additem', upload.single("image") ,additem)
app.get('/getorders', orderlist)
app.get('/getitems',getitems)
app.put('/updatestatus', updatestatus)
app.put('/updatedesc',updatedesc)



mongoose
.connect(
    "mongodb+srv://hello:world@cluster0.foo8h.mongodb.net/d15?retryWrites=true&w=majority"
)
.then((db) => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err)
});

app.listen(780);
