const path = require("path");
const router = require("express").Router();
const notesDB = require("../db/db.json");
var fs = require("fs");


// the get function is quite straightforward as the db.json file has already been required, 
// so we just return the notesDB in JSON format as the response.
router.get("/api/notes", (req, res) => {

	// const data = fs.readFileSync("./db/db.json", { encoding: "utf8" });
	console.log(notesDB);
	res.json(notesDB);
});

// post function which moves the request body into the notes variable
// then makes the notes ID a unique number (in this case, using the current date/time)
// the function pushes the new note into the notesDB array and then writes the array to the db.jsonfile
router.post("/api/notes", (req, res) => {
	let note = req.body;
	note.id = Date.now();
	console.log(note);
	notesDB.push(note);
	fs.writeFileSync("./db/db.json", JSON.stringify(notesDB), "UTF8");
	res.json(notesDB);
});

// the delete function checks the IDs of each of the notes against the current note chosen for delete
// if the IDs match, we use the 'Splice' command to delete that particular element of the array.
router.delete("/api/notes/:id", (req, res) => {
	console.log("trying to delete:" + req.params.id);
	const indexToDelete = notesDB.findIndex(function (currentNote) {
		if (currentNote.id == req.params.id)
			return true
		else
			return false
	});
	notesDB.splice(indexToDelete, 1);
	return res.json(notesDB);
});

module.exports = router;