var mongoose = require('mongoose');

var IdeaSchema = new mongoose.Schema({
  itemName: String,
  requestName: String,
});

mongoose.model('Idea', IdeaSchema);