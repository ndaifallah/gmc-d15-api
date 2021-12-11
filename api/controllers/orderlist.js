let orders= require('../models/orders')
let items= require('../models/items')
const { response } = require('express')
let jwt= require('jsonwebtoken')

let getorders=(req,resp)=>{
    let token= req.header("Authtoken")
    if(!token || token.lenght== 0){
        resp.status(300).send("Token not sent")
        console.log(token)
    }else{
        try{
            let decoded_token= jwt.verify(token, "azerty")
            console.log(decoded_token)
            orders.find({"produits.seller":decoded_token.id}).populate("produits").exec((err,result)=>{
                console.log(result)
                if(err!=null){
                    console.log('error not null')
                    resp.status(300).json({
                        status:"error occured"
                    })
                }else{
                    console.log('in else block')
                    resp.status(200).json({
                        orders: result
                    })
                }
            })
        }catch(e){
            console.log(e)
        }
           
    }}


module.exports= getorders