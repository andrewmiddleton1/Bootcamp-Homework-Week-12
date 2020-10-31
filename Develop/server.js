// Dependencies + Routing
// =============================================================
const express = require("express");
const path = require("path");
const fs = require('fs');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


// Sets up the Express App + Creates Port
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

//Data

// let notes = [
//     {
//         noteID: 1234,
//         notecontent: "First Note's Content"

//     },
//     {
//         noteID: 5678,
//         notecontent: "Second Note's Content"

//     }
// ];



// Routes
// =============================================================

// Route setup for HTML
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });


// // Route Setup for the API
// app.get("/api/notes", function (req, res) {
//     fs.readFileSync(__dirname + "/db/db.json");
//     res.json();
// });

// app.post("/api/notes", function (req, res) {
//     // 
//     //notes.push(newNote);
//     // console.log(newNote);
//     fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(notes - array), "UTF8");
//     // res.json(newNote);

// });

// We then add the json the user sent to the character array + save the array to db.json


// app.post('/api/clear', function (req, res) {
//     notes = [];



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
