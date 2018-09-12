// dependencies 
const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', (req, res) => {
        console.log("Reading API");
        res.json(friends);
    });

    app.post("/api/new", function (req, res) {
        console.log(userSore);

        var userScore2 = { ...req.body.userScore };
        console.log(userScore2);
        var totalUser = userScore2.reduce((a, b) => a + b + 0, 0);
        console.log(totalUser);
        // THIS would go into API 
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
        // CAN I USE REQUIRE EXPRESS AND USE THE APP TO 
    });
};
