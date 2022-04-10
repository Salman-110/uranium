const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();



        
          
         let players =
            [
                {
                    "name": "manish",
                    "dob": "1/1/1995",
                    "gender": "male",
                    "city": "jalandhar",
                    "sports": [
                        "swimming"
                    ]
                },
                {
                    "name": "gopal",
                    "dob": "1/09/1995",
                    "gender": "male",
                    "city": "delhi",
                    "sports": [
                        "soccer"
                    ],
                },
                {
                    "name": "lokesh",
                    "dob": "1/1/1990",
                    "gender": "male",
                    "city": "mumbai",
                    "sports": [
                        "soccer"
                    ],
                },
            ]
          
            router.post('/players', function (req, res) {
          
                let data = req.body 
                    players.filter((x) => {if(x.name === data.name)
                        res.send ({msg : 'Name already exits'})
                    
               
          });
               
               players.push(data);
               return res.send(players);
              
            });

           
         module.exports = router;

        
         
         
       
    

        