let orders= require('../models/orders')
let items= require('../models/items')

let getorders=(req,resp)=>{
    let token= req.header("Authtoken")
    if(!token || token.lenght== 0){
        resp.status(300).send("Token not sent")
        console.log(token)
    }else{
        try{
            let decoded_token= jwt.verify(token, "azerty")
            console.log(decoded_token)
            orders.find({produits:{sellers}})
        }catch(e){

        }
    }

}
module.exports= getorders