var itemlist =require('../models/items')


let filter = async(req,res)=>{

    let price2 = req.query.price1 || "";
    let itemname2 = req.query.name1 || "";
 try{
   itemlist.find({price:price2,itemname:itemname2},(err,filters)=>{
   
    if (err == null) {
        console.log(err)
        res.status(200).json(filters);
      } else {
          console.log(err)
        res.status(300).send("NOT FILTER ");
      }
   
    });
   
    }catch(e){
    console.log(e)
    }
}


module.exports = filter;