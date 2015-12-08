var express = require('express');
var router = express.Router();
var db = require('./db');
teams = [
    {
        id:1,
        name:"Critical Assets",
        players:[
            {
                "number": 7,
                "name": "amnesiaguy"
            },
            {
                "number": 13,
                "name": "pleonator"
            },
            {
                "number": 15,
                "name": "chico"
            },
            {
                "number": 17,
                "name": "Raf"
            }
        ]
    },
    {
        id:2,
        name: "Critical Element",
        players:[
            {
                "number": 11,
                "name": "Owlsome"
            },
            {
                "number": 9,
                "name": "Akaangel69"
            },
            {
                "number": 18,
                "name": "Akinzee"
            }
        ]
    }
]

/* GET teams listing. */
router.get('/', function(req, res, next) {
  res.json({teams: teams});
});

/* GET a team */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    for(var i =0; i< teams.length; i++){
        if(teams[i].id == id){
            var team = teams[i];
        }
    }
    res.json({team:team});
});

module.exports = router;
