const mongoose = require('mongoose');
let ObjectId= mongoose.Schema.Types.ObjectId
const productOrderSchema = new mongoose.Schema( {
    
    userId:{
        type: ObjectId,
        ref: "userDetail"
    },
	productId:{
        type:ObjectId,
        ref: "productDetail"
    },
	amount: {
        type:Number,
    },
	isFreeAppUser: {
        type:Boolean,
    }

	},{ timestamps: true });

module.exports = mongoose.model('purchaseOrder',productOrderSchema) 
