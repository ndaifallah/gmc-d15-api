let orders= require('../models/orders')
let items= require('../models/items')

let order= async(req,resp)=>{
    let name= req.body.name
    let nickname= req.body.nickname
    let address= req.body.address
    let products= req.body.products
    let seller= req.body.vendeur
    try{
        console.log(orders.length)
        let doc= new orders({
        nom : name,
        prenom : nickname,
        produits : products,
        adresseclient : address,
        vendeur:seller,
        date : Date().now,
        status: "test status",
        })
        await doc.save()
        console.log(doc,"test")
        resp.status(200).send('order registered')
    }catch(err){
        console.log(err)
    }

}
module.exports= order