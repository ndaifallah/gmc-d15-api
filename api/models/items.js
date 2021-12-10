var mongoose = require("mongoose");
var sellers= require('./sellers')

let Item= mongoose.model("item",{
    itemname:String,
    price:Number,
    gender:String,
    size: String,
    description:String,
    seller:{
        type: mongoose.Types.ObjectId,
        ref:sellers
    }
})