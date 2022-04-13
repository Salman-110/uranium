const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



const booksCollection = async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
        res.send({msg: savedData})
}

const authorCollection = async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
        res.send({msg: savedData})
}

const allBooks = async function (req, res) {
    let authorName= await AuthorModel.find({author_name: "Chetan Bhagat"})
    let id= authorName[0].author_id
    let books= await BookModel.find({author_id:id}).select({name:1,_id:0})
    res.send({msg: books})
}

const updateData = async function (req, res) {
    let updateBooks= await BookModel.find({name:"Two states"})
    let id= updateBooks[0].author_id
    const Author = await AuthorModel.find({author_id:id}).select({author_name:1,_id:0})

    const bkName = updateBooks[0].name
    const updatedData= await BookModel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:  Author,updatedData})
}

const authorName=async function(req,res) {
    const bookId= await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id=bookId.map(inp=>inp.author_id)
    let temp=[]
    for (let i=0;i<id.length;i++){
        let x=id[i]
        const author= await AuthorModel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(author)

    }
    const authorName=temp.flat()
    res.send({msg: authorName})
}





module.exports.booksCollection= booksCollection
module.exports.authorCollection= authorCollection
module.exports.allBooks=allBooks
module.exports.updateData=updateData
module.exports.authorName=authorName
// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

/*const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
} */




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE  


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
