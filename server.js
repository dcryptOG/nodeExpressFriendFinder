const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(__dirname + "/app/css/style.css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT);
});


/*
steps 

Edit htmlRoutes

edit htmlRoutes & use loop from star wars
*/