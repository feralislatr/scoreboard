var express = require('express');
var router = express.Router();

router.get('/agile', function(req, res) {
  res.render('Agile');
});

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

router.get('/', function(req, res) {
  res.render('projPage');
});

router.get('/scoreboard', function(req, res) {
  res.render('scoreboard');
});

router.get('/scoreboard2', function(req, res) {
  res.render('scoreboard2');
});

router.get('/scoreboard3', function(req, res) {
  res.render('scoreboard3');
});

router.get('/ux', function(req, res) {
  res.render('ux');
});

module.exports = router;
