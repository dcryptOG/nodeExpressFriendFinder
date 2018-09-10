// dependencies 
const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', (req, res) => {
        console.log("Reading API");
        res.json(friends);
    });

    app.post("/api/new", function (req, res) {
        //variables for finding match
        var newFriend = req.body;
        console.log(newFriend);
        var newScore = newFriend.scores;
        console.log(newScore);
        var total = 0;

        for (var i = 0; i < friends.length; i++) {
            return res.json(friends[index]);
            //Iterate through the whole list of friends already in database
            total = 0;
            var diff = Math.abs(newScore[j] - friends[i].scores[j]);
            total += diff;
        }

        friends.push(newFriend);
        res.json(friends[index]);
    });
};