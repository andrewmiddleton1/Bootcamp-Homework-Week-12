const path = require("path");
const router = require("express").Router();
const notesDB = require("../db/db.json");
var fs = require("fs");


router.get("/api/notes", (req, res) => {
	fs.readFile
	res.json()
})

router.post("/api/notes", (req, res) => {
	let note = req.body
	fs.write
})

router.delete("api/notes/", (req, res) => {

})

module.exports = router;