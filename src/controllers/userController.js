const req = require("express/lib/request")
const productModel = require("../models/productModel")
const userModel2 = require("../models/userModel2")

const purchaseOrderModel = require("../models/purchaseOrderModel")


const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)
    //counter
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    
    }


const createAUser = function(req, res) {
    let requestBody = req.body
    let headers  = req.headers
    

    //Printing all the headers before modification - addition of a new header called 'month'
    console.log('Request headers are before: ', headers)

    //Accessing a request header called 'batch'
    let batchHeader = headers["batch"] // headers.batch 
    
    ///Accessing a request header called 'content-type'
    let contentHeader = headers['content-type'] // headers.content-type

    console.log('Content Type hedser is: ',contentHeader)
    console.log('Batch header is: ', batchHeader)

    //Adding a new requets header
    req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


    //Printing the headers after modification - addition of a new header called 'month'
    console.log('Request headers are after: ', headers)


    console.log('Request property called current-day', req['current-day'])
    
    //Adding a response header
    res.header('year', '2022')

    res.send('Just create a user')
}

const createProduct= async function (req,res) {
    let product= req.body
    let productCreate= await productModel.create(product) 
    res.send({data:productCreate})
}

const createUser= async function (req,res) {
    let User= req.body
    let UserCreate= await userModel2.create(User) 
    res.send({data:UserCreate})
}

const purchaseOrder= async function (req,res) {
    let data= req.body
    let userId= req.body.userId
    let productId= req.body.productId
    if(!userId || !productId){
        return res.status(422).send({msg:"user or Product details is required"});
}
// Validation A
  if(!userId) return res.send('The request is not Valid as the user details are required')
// Validation B
let user = await userModel2.findById(userId)
if(!user) return res.send('The request is not Valid as no user is present with the given userId.')
// Validdation C
if(!productId) return res.send('the request is not valid as the product details are required')
// Validation D 
let product=await productModel.findById(productId)
if(!product) return res.send('the request is not valid as no product is present with the given productId')
}
   let isfreeappuser= req.header["isfreeappuser"]
   if(isfreeappuser== 'false'){

    if(product.price < user.balance){
        userModel2.updateMany({user:{$eq:user_id}},{$inc:{balance: -product.price}},{new:true})
        let userData= req.body;
        userData.isfreeappuser=["isfreeappuser"];
        userData.amount=product.price;
       

        const savedData= purchaseOrderModel.create(userData);
        res.send({status:savedData})

    }else{
        res.send({msg:"you dnt have required balance in your Account"})
    }


    }else{
        let userDataF= req.body;
        userDataF.isfreeappuser=["isfreeappuser"];
        userDataF.amount=0;
        

        const savedProduct= purchaseOrderModel.create(userDataF);
        res.send({status:savedProduct})
    }
   




module.exports.createAUser = createAUser
module.exports.basicCode = basicCode
module.exports.createProduct=createProduct
module.exports.createUser=createUser
module.exports.purchaseOrder=purchaseOrder
















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode