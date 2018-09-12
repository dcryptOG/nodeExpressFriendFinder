// dependencies 
const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', (req, res) => {
        console.log("Reading API");
        res.json(friends);
        console.log(friends);
    });

    app.post("/api/new", function (req, res) {
        console.log(friends);
        // Capture the user input object
        var userInput = req.body;
        console.log(userInput);
        console.log(typeof userInput);
        var t1 = Object.keys(userInput);
        var t2 = Object.values(userInput);
        console.log(t1[2]);
        console.log(t2[2]);
        var t3 = t2[2];
        var totalUser = t3.map(function (elt) { // assure the value can be converted into a number
            return /^\d+$/.test(elt) ? parseInt(elt) : 0;
        }).reduce(function (a, b) { // sum all resulting numbers
            return a + b
        });
        console.log(totalUser);
        // var t2 = JSON.parse(t1);


        var diff = [];
        for (i = 0; i < friends.length; i++) {
            var totalFriends = friends[i].scores.reduce((a, b) => a + b, 0);
            var totalDiff = Math.abs(totalFriends - totalUser);
            diff.push(totalDiff);
        };
        let min = Math.min(...diff)
        let matchI = diff.indexOf(min)
        let match = friends[matchI];
        console.log(match);

        // var diff = [];
        // for (i = 0; i < friends.length; i++) {
        //     var totalFriends = friends[i].scores.reduce((a, b) => a + b, 0);
        //     var totalDiff = Math.abs(totalFriends - totalUser);
        //     diff.push(totalDiff);
        // };
        // let min = Math.min(...diff)
        // let matchI = diff.indexOf(min)
        // let match = friends[matchI];
        // console.log(match);
        // CAN I USE REQUIRE EXPRESS AND USE THE APP TO 
    });
};
