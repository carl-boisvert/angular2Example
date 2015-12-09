var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET teams listing. */
router.get('/', function(req, res, next) {
    var promise = models.Team.findAll({
        include: [models.Player]
    }).then(function(teams) {
        console.log(teams);
        res.json({teams:teams});
    }).catch(function(error) {
        console.log('oh no', error);
    });
});

/* GET a team */
router.get('/:id', function(req, res, next) {
    var promise = models.Team.findById(req.params.id,{
        include: [models.Player]
    }).then(function(team) {
        console.log(team);
        res.json({team:team});
    }).catch(function(error) {
        console.log('oh no', error);
    });
});

module.exports = router;
