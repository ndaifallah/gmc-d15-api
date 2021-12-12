let orders= require('../models/orders')
let items= require('../models/items')
const { response } = require('express')
let jwt= require('jsonwebtoken')
const filter = require('./filter')

let getorders=(req,resp)=>{
    let token= req.header("Authtoken")
    if(!token || token.lenght== 0){
        resp.status(300).send("Token not sent")
        console.log(token)
    }else{
        try{
            let decoded_token= jwt.verify(token, "azerty")
            console.log(decoded_token.id)
            // {path:"produits",populate:{path:"seller"}}
            orders.find().populate("produits").populate("vendeur","user_name").exec((err,result)=>{
                console.log(result)
                if(err!=null){
                    console.log('error not null')
                    resp.status(300).json({
                        status:"error occured"
                    })
                }else{
                    console.log('in else block')
                    let newResult =result.filter((res)=>{
                        return res.vendeur._id==decoded_token.id
                    })
                    resp.status(200).json({
                        orders: newResult
                    })
                }
            })
        }catch(e){
            console.log(e)
        }
           
    }}


module.exports= getorders