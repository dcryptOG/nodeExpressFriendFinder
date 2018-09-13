// dependencies 
const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', (req, res) => {
        console.log("Reading API");
        res.json(friends);
        console.log(friends);
    });

    app.post('/api/new', function (req, res) {
        console.log(req.body);
        var userInput = req.body;
        console.log(userInput);
        console.log(typeof userInput);

        let t2 = Object.values(userInput);
        console.log(t2);
        let t3 = t2[0];
        console.log(t3);

        // BELOW Array of strings into Array of numbers & sums w/reduce
        // SOLUTION https://stackoverflow.com/questions/13128610/how-to-sum-an-array-of-strings-representing-ints
        // http://www.ntu.edu.sg/home/ehchua/programming/howto/regexe.html
        //  the /.../ regex notation ^$ are anchors d is shorthand digits or numbers 0-9 + if one or more digits
        // ? is if statement... parseInt() : 0 is else assigned for false statement 

        var totalUser = t3.map(function (elt) {
            return /^\d+$/.test(elt) ? parseInt(elt) : 0;
        }).reduce(function (a, b) {
            return a + b
        });
        console.log(totalUser);

        // Take the difference of "User Sum" and the "Friend Sum" for each individual. 


        var diff = [];
        for (i = 0; i < friends.length; i++) {
            var totalFriends = friends[i].scores.reduce((a, b) => a + b, 0);
            var totalDiff = Math.abs(totalFriends - totalUser);
            diff.push(totalDiff);
        };
        // diff is a NEW array with SAME INDEX or KEY as FRIENDS(original) DIFFERENT VALUES. 
        // BELOW finds the min of the array and matches the KEY or INDEX#

        let min = Math.min(...diff)
        let matchI = diff.indexOf(min)
        let match = friends[matchI];
        console.log(match);
        res.json(match);
    });
};

    // var userInput = req.body;
    // console.log(userInput);
    // console.log(typeof userInput);
    // let t2 = Object.values(userInput);
    // console.log(t2);
    // let t3 = t2[2];

    // BELOW Array of strings into Array of numbers & sums w/reduce
    // SOLUTION https://stackoverflow.com/questions/13128610/how-to-sum-an-array-of-strings-representing-ints
    // http://www.ntu.edu.sg/home/ehchua/programming/howto/regexe.html
    //  the /.../ regex notation ^$ are anchors d is shorthand digits or numbers 0-9 + if one or more digits
    // ? is if statement... parseInt() : 0 is else assigned for false statement 

    // var totalUser = t3.map(function (elt) {
    //     return /^\d+$/.test(elt) ? parseInt(elt) : 0;
    // }).reduce(function (a, b) {
    //     return a + b
    // });
    // console.log(totalUser);

    // Take the difference of "User Sum" and the "Friend Sum" for each individual. 

    // var diff = [];
    // for (i = 0; i < friends.length; i++) {
    //     var totalFriends = friends[i].scores.reduce((a, b) => a + b, 0);
    //     var totalDiff = Math.abs(totalFriends - totalUser);
    //     diff.push(totalDiff);
    // };

    // diff is a NEW array with SAME INDEX or KEY as FRIENDS(original) DIFFERENT VALUES. 
    // BELOW finds the min of the array and matches the KEY or INDEX#

    // let min = Math.min(...diff)
    // let matchI = diff.indexOf(min)
    // let match = friends[matchI];
    // console.log(match);
    // // Add new user to frends.js
    // friends.push(userInput);
