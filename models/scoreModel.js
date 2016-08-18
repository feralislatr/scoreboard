var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
  name: String, score: Number
});

scoreSchema.statics = {
  getScoreByName: function(judge, callback) {
    this.findOne({name:judge}, function(error, scoreData) {
      console.log("scoreData:");
      console.log(scoreData);

      if (error) callback(error);
      callback(null, scoreData);
    })
  }
};

var scoreModel = mongoose.model('scorecol', scoreSchema);
module.exports = scoreModel;
