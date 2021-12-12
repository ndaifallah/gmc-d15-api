let orders= require('../models/orders')
let jwt= require('jsonwebtoken')

let updatestatus= (req,resp)=>{
    let token= req.header("Authtoken")
    let status= req.body.status
    let item= req.body.item

    if(!token || token.lenght==0){
        resp.status(300).send("token not sent")
        return
    }
    try{
        let decoded_token= jwt.verify(token, "azerty")
        
        orders.findOneAndUpdate({_id:item},{status:status},{new:true},async function(err, doc) {
            if (err) return resp.send(500, {error: err});
            console.log(doc)
           
            return resp.send('Succesfully saved.');
        })
    }catch(e){
        console.log(e)
        return resp.send(300,'token invalid')
    }
}
module.exports= updatestatus