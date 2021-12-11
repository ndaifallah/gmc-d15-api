var itemlist =require('../models/items')


let filter = async(req,res)=>{

    let price2 = req.body.price1 || "";
    let itemname2 = req.body.name1 || "";
 try{
   itemlist.filter({price=price2,itemname2},(err,filters)=>{
   
    if (err == null) {
        console.log(err)
        res.status(200).json(filters);
      } else {
        res.status(300).send("NOT FILTER ");
      }
   
    });
   
    }catch(e){
    console.log(e)
    }
}

module.exports = filter;