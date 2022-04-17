const mongoose = require('mongoose');

const newPublisherSchema = new mongoose.Schema({

   "name": "string",
   "headQuarter": "string"


})
module.exports = mongoose.model('newPublisher', newPublisherSchema)
