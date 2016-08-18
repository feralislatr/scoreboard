// set variables for environment
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', function() { console.log('connection error'); });
db.once('open', function (callback) {
    console.log("database connected");
});

// Import score route handlers
 var scoreRoute = require('./routes/scoreRoute');


// Import score model
 var ScoreModel = require('./models/scoreModel');

var app = express();

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs
// instruct express to server up static assets
app.use(express.static('public'));


app.use('/', scoreRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.redirect('/');
//  next(err);
});

// Set server port
app.listen(3000);
console.log('server is running');
