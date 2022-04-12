const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:  {
        type:"string",
        required: true,
        unique:true,

    },
    authorName: "string",
    category : {
        type: String,
        enum: ["fiction", "self help", "adventure" ,"fantasy"]
    } ,

    year: Number


    
}, { timestamps: true });

module.exports = mongoose.model('kitaab', bookSchema) //kitabs



// String, Number
// Boolean, Object/json, array