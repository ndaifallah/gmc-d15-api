var itemlist = require("../models/items");

let getitems = async(req,res)=>{
    
    itemlist.find({}).lean()
    .populate("seller",'user_name')
    .exec((err,itemslist)=>{
        try{
            
            if(err != null) {
                console.log(err)
                res.status(500).send("Erreur serveur");
            }else {
                
                res.status(200).json(itemslist);            
            }

        }catch(e){
            console.log(e)
        }
            });
   
}



module.exports = getitems;