var note = require("../controllers/notes_controller.js");
module.exports = function(app){
	//routing
	app.get("/notes", function (req, res) {
		note.showall(req,res);
	});

	app.post("/notes", (req, res) => {
		note.create(req, res);
	})

	app.all("*"), function (req, res){
		res.sendFile(path.resolve("./public/dist/index.html"))
	}
}