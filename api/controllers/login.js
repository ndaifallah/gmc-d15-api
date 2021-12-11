let jwt = require("jsonwebtoken");
let Sellers= require('../models/sellers')

const Login =async (req,resp)=>{
    let user_name= req.body.user_name || ""
    let password = req.body.password|| ""
    console.log(req.body)
    Sellers.find({user_name: user_name , password: password},(err,sellers)=>{
        console.log(err==null && sellers.length >0)
        if(err==null && sellers.length >0){
            console.log("in if block")
            let seller= sellers[0]
            let tokendata={
                id: seller._id,
                user_name: seller.user_name,
            }
            let token= jwt.sign(tokendata, "azerty");
            console.log(token)
            resp.status(200).json({
                status:'success',
                token: token
            })
        }else{
            resp.status(300).json({satus:"failed to login"})
        }
    })
}

module.exports= Login