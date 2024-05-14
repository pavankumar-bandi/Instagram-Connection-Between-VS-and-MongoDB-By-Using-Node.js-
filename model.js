const mongoose = require('mongoose')

const Insta = new mongoose.Schema({
username : {type:String},
password : {type:String},
name  : {type:String},
age :   {type:Number}
})

const NewInsta = mongoose.model('Bio',Insta);

module.exports = NewInsta;