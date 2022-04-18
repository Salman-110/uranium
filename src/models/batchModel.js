const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema( {
    
    name:String,
    size:Number,
    program: {
          type:String,

          program: {
            type: String,
            enum: ["Backend" , "Frontend"]
        },
     } 
    
}, );

module.exports = mongoose.model('batchdetail', batchSchema)