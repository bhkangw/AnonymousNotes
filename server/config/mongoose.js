var mongoose = require("mongoose")
var path = require("path")
var fs = require("fs") // file system, allows us to read or write files
var mp = path.join(__dirname, "../models"); // mp = models path

mongoose.connect("mongodb://localhost/notes"); // only change here

fs.readdirSync(mp).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		require(mp + '/' + file)
	}
})