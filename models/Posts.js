var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  itemName: String,
  requestName: String,
});

mongoose.model('Post', PostSchema);