const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author_id:{
          type: ObjectId,
          ref: "newAuthordetail"
 },
         isHardCover:{
             type:Boolean,
             default:false,
         },

         price: Number,
         ratings: Number,
         publisher_id:{
           
         type: ObjectId,
         ref: "newPublisher"

    }
}, 
//  { timestamps: true }
 );


module.exports = mongoose.model('newBooklibrary', newBookSchema)
