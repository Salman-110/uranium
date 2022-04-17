const mongoose = require('mongoose');

const newAuhorSchema = new mongoose.Schema( {
    
    author_name: String,
    age:Number,
    address:String,
    rating: Number

}, );

module.exports = mongoose.model('newAuthordetail', newAuhorSchema)
