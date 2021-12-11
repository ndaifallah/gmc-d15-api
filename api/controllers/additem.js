var item = require('../models/items');
var jwt = require('jsonwebtoken')



const AddItem = async (req, resp)=>{
    try{
        
    }catch(err){
        console.log(err);
        resp.status(300).json({status:'Auth not authorized'})
    }
};
module.exports=AddItem;