var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET a team */
router.get('/:id', function(req, res, next) {
    var promise = models.Player.findById(req.params.id,{
        include: [models.Team]
    }).then(function(player) {
        console.log(player);
        res.json({player:player});
    }).catch(function(error) {
        console.log('oh no', error);
        console.log('oh no', error.stack);
    });
});

router.post('/', function(req, res, next) {
    var player = models.Player.build({
        gamertag:req.body.gamertag
    });

    player.createPassword(req.body.password);
    player.save().then(function(anotherTask) {
        res.json({
            success:1
        });
    }).catch(function(error) {
        var errors = {};
        for(var i = 0; i <error.errors.length; i++){
            errors[i] = error.errors[i].message;
        }
        res.json({
            success: 0,
            errors:errors
        });
    });
});

module.exports = router;
