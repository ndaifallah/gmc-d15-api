var item = require('../models/items');
var jwt = require('jsonwebtoken')



const AddItem = async (req, resp)=>{
    try{
        let token = req.header('AuthToken');
        let itemname2 = req.body.itemname
        let price2 = req.body.price;
        let gender2 = req.body.gender;
        let size2 = req.body.size;
        let description2 = req.body.description;
        let seller2 = req.body.seller;

        if(!token || token ==''){
            return resp.status(300).json({error: 'No Token'})
        };
        let user_info = jwt.verify(token, 'azerty');
        let doc = new item({
            itemname: itemname2,
            price: price2,
            gender: gender2,
            size: size2,
            description: description2,
            seller: seller2,
        });
        await doc.save();
        resp.status(200);
        resp.send('ok');
    }catch(err){
        console.log(err);
        resp.status(300).json({status:'Auth not authorized'})
    }
};
module.exports=AddItem;