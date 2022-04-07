const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
// Q1 ----------------------------------------------------------------------------------//
router.get('/movies', function(req, res) {
    arr =["pushpa", "Dhamaal", "WrongTurn", "Titanic", "RRR", "Batman"]
    res.send(arr)
    console.log("list of movies printed in Responce.")

});

// Q2 & Q3 ----------------------------------------------------------------------------//

router.get('/movies/:indexnumber', function (req,res){
    
    function movieNames(){
  let Movies=['WrongTurn','Phushpa','RRR','Dhamaal','Star wars','Titanic']
  let a= req.params.indexnumber;
  if(Movies.length>=a){
      return Movies.at(a)
  }else if(a>Movies.length){
      return "Please Enter Valid Number"
  }
    }
   res.send(movieNames()) 

});
// Q4 -------------------------------------------------//
router.get('/films', function (req,res){

   let x= [ {
        "id": 1,
        "name": 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(x)

})

// Q5 ------------------------------------------------------------------//

router.get('/films/:filmId', function (req,res){
    
        function filmNames(){
            let x=[ {
                'id': 1,
                'name': 'The Shining'
               }, {
                'id': 2,
                'name': 'Incendies'
               }, {
                'id': 3,
                'name': 'Rang de Basanti'
               }, {
                'id': 4,
                'name': 'Finding Nemo'
               }]
               for(let i=0;i<x.length;i++){
                  if(req.params.filmId==x[i].id){
                       return x[i]
                   }else if(req.params.filmId!==x[i].id){
                       return "No movie exist with this Id"
                   }
               }     
         }
         res.send(filmNames())
         })



    




module.exports = router;
// adding this comment for no reason