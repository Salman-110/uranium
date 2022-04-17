const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")
const newAuthrorModel= require("../models/newAuthorModel")

const newCreateBook= async function (req, res) {
    let book = req.body
    let bookCreated = await newBookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}
const getNewData= async function (req, res) {
    let data= req.body
    if(data.author_id && data.publisher_id) {
        let savedData= await newBookModel.create(data)
        res.send({msg: savedData})

    } else {
        res.send({msg: 'author_id and Publisher_id must be present'})
    }
}


const getBooksWithDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate(['author_id', 'publisher_id'])
    res.send({data: specificBook})

}

const updateBooksData= async function(req,res){
    let bookUpdates= await newBookModel.find().updateMany({publisher:{ $in :["625a925b55ffb4c4749c5328","625a92b955ffb4c4749c532e"]}},
    {isHardCover:true},
    {new:true}).select({isHardCover:1,_id:0})
   
   
    const authorRatings =await newAuthrorModel.find({ratings:{$gt:3.5}}).select({_id:1})
    let author_id=authorRatings.map(element=>element._id)
    console.log(author_id)
   
    let array=[]
    for (let i=0;i<author_id.length;i++){
        const newPrice= await newBookModel.updateMany(
            {author:author_id[i]},
            {$inc:{"price":10}},
            {new:true}
        )
        array.push(newPrice)
    }
     res.send({msg: bookUpdates,array})
   }

module.exports.newCreateBook= newCreateBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithDetails = getBooksWithDetails
module.exports.getNewData=getNewData
module.exports.updateBooksData=updateBooksData
