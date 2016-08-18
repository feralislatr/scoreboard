var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

var ScoreModel = require('../models/scoreModel');

router.get('/', function(req, res) {
  res.render('projPage');
});

router.get('/:name', function(req, res) {
  var name = req.params.name;
    ScoreModel.findOne({'name':name})
      .exec(function(error, nameData) {
        if (error) utils.sendErrResponse(res, 500, "An error occurred retreiving zip");
        else utils.sendSuccessResponse(res, {nameData:nameData});
    });
});

module.exports = router;

//router.get('/scoreboard')
