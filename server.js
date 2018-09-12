// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Static files
app.use(express.static('app/public'));


// Router
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);


app.listen(PORT, () => {
	console.log(`I\'m listening... on port " + ${PORT}`);
})