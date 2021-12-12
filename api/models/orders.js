var mongoose = require('mongoose');
var items = require('./items')
var sellers= require('./sellers')

const Commandes = mongoose.model('orders',{
    nom : String,
    prenom : String,
    adresse : String,
    produits :[{
        type: mongoose.Types.ObjectId,
        ref: items,
    }],
    vendeur: {
        type: mongoose.Types.ObjectId,
        ref: sellers,
    },
    adresseclient : String,
    date : Date,
    status: String,
});

module.exports = Commandes 