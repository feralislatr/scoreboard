var express = require('express');
var router = express.Router();

router.get('/businessval', function(req, res) {
  res.render('businessValue');
});

router.get('/conttesting', function(req, res) {
  res.render('continuousTesting');
});

router.get('/devops', function(req, res) {
  res.render('devops');
});

router.get('/functionality', function(req, res) {
  res.render('functionality');
});

router.get('/login', function(req, res) {
  res.render('loginPage');
});

router.get('/home', function(req, res) {
  res.render('projPage');
});

router.get('/scoreboard', function(req, res) {
  res.render('scoreboard');
});

router.get('/ux', function(req, res) {
  res.render('ux');
});

module.exports = router;
