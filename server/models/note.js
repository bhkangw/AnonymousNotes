var mongoose = require("mongoose")
// var Schema = mongoose.Schema
mongoose.Promise = global.Promise;

var NoteSchema = new mongoose.Schema({
// var NoteSchema = new Schema({
	content: {type: String, required: true, minlength: 3},
  }, {timestamps: true});

mongoose.model('Note', NoteSchema);