var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET a team */
router.get('/:id', function(req, res, next) {
    var promise = models.Player.findById(req.params.id).then(function(player) {
        console.log(player);
        res.json({player:player});
    }).catch(function(error) {
        console.log('oh no', error);
    });
});

module.exports = router;
