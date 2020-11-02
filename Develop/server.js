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

// Sets up the Express app to handle data parsing and routes
//Note: Routes will established in their own js files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
