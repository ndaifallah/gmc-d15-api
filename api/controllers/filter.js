var itemlist =require('../models/items')


let filter = async(req,res)=>{

   itemlist.filter({},(err,filters)=>{
    try{
    if (err == null) {
        console.log(err)
        res.status(200).json(filters);
      } else {
        res.status(300).send("NOT FILTER ");
      }
   }

})









}

