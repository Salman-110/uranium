const newPublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let newPublisher = req.body
    let newPublisherCreated = await newPublisherModel.create(newPublisher)
    res.send({data: newPublisherCreated})
}

module.exports.createPublisher= createPublisher