let vendure = require("../models/sellers");

let signup = async(req,res)=>{
    console.log(vendure);
    let user_name2= req.body.user_name1;
    let password2=req.body.password1;
   

    vendure.find({user_name:user_name2},async(err,resultat)=>{
        if(err==null && resultat.length>0 ){
            console.log(resultat)
            res.status(300).json({status:"ce vendure la est deja cree don desole"});
        }else {
            try {
                let doc=new vendure({
                    user_name:user_name2,
                    password:password2
                });
                await doc.save();
                res.status(200).json({status:"inscrit avec succes "});
            }catch(err){
            res.status(300).json({status:"une faille pour cree dsl"});
            }
        }
    });
};


module.exports = signup;