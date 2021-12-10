var mongoose = require("mongoose");
const { stringify } = require("querystring");

const vendure  = mongoose.model("vends", {
	user_name: String,
	email: String,
    adress:String,
});



module.exports = vendure ;