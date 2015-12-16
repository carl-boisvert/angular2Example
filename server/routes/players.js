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

module.exports = router;
