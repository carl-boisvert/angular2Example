var express = require('express');
var router = express.Router();

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


/* GET a team */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    for(var i =0; i< teams.length; i++){
        for(var j =0; j< teams[i].players.length; j++) {
            if (teams[i].players[j].number == id) {
                var player = teams[i].players[j];
            }
        }
    }
    res.json({player:player});
});

module.exports = router;
