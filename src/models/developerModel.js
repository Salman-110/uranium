const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({

    name: String,

    gender: {
        type: String,
        enum: ["male", "female", "Other"]
    },


    percentage: Number,

    batch: {
        type: ObjectId,
        ref: "batchdetail"
    }


});

module.exports = mongoose.model('developers', developerSchema)