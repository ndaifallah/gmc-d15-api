var itemlist =require('../models/items')


let filter = async(req,res)=>{

    let price2 = req.query.price || "";
    let gender = req.query.gender || "";
    let size =req.query.size || "";
 try{
   itemlist.find({price : {$lt:price2}, gender:gender, size: size},(err,filters)=>{
   
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