let printDate =function(){
    console.log(module)
    console.log('06')
    
}

let printMonth= function(){
    console.log(module)
    console.log('April')

}

let getBatchInfo= function(){
    console.log(module)
    console.log('Uranium, W3D1, the topic for today is Nodejs module system')

}

module.exports.date=printDate;
module.exports.month=printMonth;
module.exports.batch=getBatchInfo;