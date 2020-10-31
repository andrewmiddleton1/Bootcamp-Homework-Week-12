const path = require("path");
const router = require("express").Router();
const notesDB = require("./db/db.json");
var fs = require("fs");


router.get("/api/notes", (req, res) => {

	fs.readFileSync("../db/db.json", "utf-8", (err, data) => {
		if (err) { console.log(err) }
		console.log(data);
	});
	res.json(data);
});

router.post("/api/notes", (req, res) => {
	let note = req.body
	console.log(note);
	fs.writeFileSync("../db/db.json", JSON.stringify(note), "UTF8");
});

router.delete("api/notes/", (req, res) => {

});

module.exports = router;