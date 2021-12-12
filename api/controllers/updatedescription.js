let items= require('../models/items')
let jwt= require('jsonwebtoken')

let updateDescription=(req,resp)=>{
    let token= req.header('Authtoken')
    let item= req.body.item
    let newDesc= req.body.desc

    if(!token || token.lenght== 0){
        return resp.send(300, "token not sent")
    }
    try{
        let decoded_token= jwt.verify(token, "azerty")
        items.findOneAndUpdate({_id:item},{description:newDesc},{new:true},function(err,doc){
            if(err) return resp.send(300, {Error: err})
            return resp.send(200, "Saved Succesfully")
        })
    }catch(e){
        console.log(e)
        resp.send(300, {Error:e})
    }
}
module.exports= updateDescription