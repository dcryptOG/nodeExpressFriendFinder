const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + 'app'));
// "C:/Users/Geoff/Desktop/class/homework/nodeExpressFriendFinder/app/public/assets/css/style.css"
// app.use('/static', express.static(path.join(__dirname, 'public')))
// console.log(('/static', express.static(path.join(__dirname, 'app/public/assets/css'))));
// app.use(express.static(__dirname + "\\app\\public\\assets\\css\\style.css"));
// app.use(express.static(__dirname + "\\app\\public\\assets\\js\\app.js"));
// console.log(__dirname + "\\app\\public\\assets\\css\\style.css");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

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