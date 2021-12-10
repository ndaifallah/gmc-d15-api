var mongoose = require("mongoose");


const vendure  = mongoose.model("vends", {
	user_name: String,
	email: String,
    adress:String,
	password:String,
});



module.exports = vendure ;