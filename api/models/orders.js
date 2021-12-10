var mongoose = require('mongoose');

const commandes = mongoose.model('orders',{
    nom : String,
    prenom : String,
    adresse : String,
    produits : String,
    adresseclient : String,
    date : Date,
    status: String,
});

module.exports = commandes 