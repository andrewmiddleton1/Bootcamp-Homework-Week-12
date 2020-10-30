// Dependencies
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
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Data

let notes = [
    {
        noteID: 1234,
        notecontent: "First Note's Content"

    },
    {
        noteID: 5678,
        notecontent: "Second Note's Content"

    }
];



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});


// To display contents of the notes array:

// Load the array from the db.json file
fs.readFileSync(__dirname + "/../db/db.json");

// 
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    console.log(newNote);

    // We then add the json the user sent to the character array + save the array to db.json
    if (notes.length < 5) {
        notes.push(newNote);
        res.json(true);
        fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(notes - array), "UTF8");
    }
    else {
        waiting.push(newReservation);
        res.json(false);
    };

    // We then display the JSON to the users
    res.json(newNote);

});

app.post('/api/clear', function (req, res) {
    notes = [];

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
