var mongoose = require('mongoose');
var items = require('./items')

const Commandes = mongoose.model('orders',{
    nom : String,
    prenom : String,
    adresse : String,
    produits :{
        type: mongoose.Types.objectId,
        ref: items,
    },
    adresseclient : String,
    date : Date,
    status: String,
});

module.exports = Commandes 