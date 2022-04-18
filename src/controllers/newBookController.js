const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")
const newAuthrorModel= require("../models/newAuthorModel")
const batchModel= require("../models/batchModel")
const developerModel= require("../models/developerModel")



const batches= async function (req, res) {
    let batches = req.body
    let batchCreated = await batchModel.create(batches)
    res.send({data: batchCreated})
}
// ------------------------------------------------------//

const developers= async function (req, res) {
    let book = req.body
    let developerCreated = await  developerModel.create(book)
    res.send({data: developerCreated})
}
// ----------------------------------------------------------------------------//

const scholarship_developers= async function (req, res) {
    let book = req.body
    
    let bookCreated = await developerModel.find({gender:"female",percentage: {$gte:70}})
    res.send({data:bookCreated })
}
//-------------------------------------------------------------------------//

const developerswithDetail= async function(req,res) {

    let Data1= req.query.program
    let developerProgram =await batchModel.find({program:Data1}).select({_id:1});

    let Data= req.query.percentage
    let developerValue =await developerModel.find({$and:[{batch: developerProgram},{percentage: {$gte:Data}}]}).populate("batch")
        
     res.send({data:developerValue})

}






// module.exports.newCreateBook= newCreateBook
module.exports.scholarship_developers=scholarship_developers

module.exports.batches=batches
module.exports.developers=developers
module.exports.developerswithDetail=developerswithDetail

// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithDetails = getBooksWithDetails
// module.exports.getNewData=getNewData
// module.exports.updateBooksData=updateBooksData





// const getBooksData= async function (req, res) {
//     let books = await newBookModel.find()
//     res.send({data: books})
// }
// const getNewData= async function (req, res) {
//     let data= req.body
//     if(data.author_id && data.publisher_id) {
//         let savedData= await newBookModel.create(data)
//         res.send({msg: savedData})

//     } else {
//         res.send({msg: 'author_id and Publisher_id must be present'})
//     }
// }


// const getBooksWithDetails = async function (req, res) {
//     let specificBook = await newBookModel.find().populate(['author_id', 'publisher_id'])
//     res.send({data: specificBook})

// }

// const updateBooksData= async function(req,res){
//     let bookUpdates= await newBookModel.find().updateMany({publisher:{ $in :["625a925b55ffb4c4749c5328","625a92b955ffb4c4749c532e"]}},
//     {isHardCover:true},
//     {new:true}).select({isHardCover:1,_id:0})
   
   
//     const authorRatings =await newAuthrorModel.find({ratings:{$gt:3.5}}).select({_id:1})
//     let author_id=authorRatings.map(element=>element._id)
//     console.log(author_id)
   
//     let array=[]
//     for (let i=0;i<author_id.length;i++){
//         const newPrice= await newBookModel.updateMany(
//             {author:author_id[i]},
//             {$inc:{"price":10}},
//             {new:true}
//         )
//         array.push(newPrice)
//     }
//      res.send({msg: bookUpdates,array})
//    }
