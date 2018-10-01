window.onload = function () {
    var userName = document.getElementById('name');
    var userPhoto = document.getElementById('photo');
    var score = document.getElementsByClassName('scoreMenu');
    var text = document.getElementsByClassName('textInput');
    var userScore = [];

    var currentURL = window.location.origin;
    // this info can be sent from survey in app.js

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        var currentURL = window.location.origin;
        var user = String(userName.value);
        var photo = String(userPhoto.value);
        for (var i = 0; i < score.length; i++) {
            userScore.push(score[i].value);
            var userInput = [{
                "scores": userScore
            }];
        }
        console.log(userScore);
        console.log(userInput);
        $.post("api/new", {
            userInput
        }, function (res) {
            console.log(res);
            console.log('test');
            console.log(res.name);

            var matchName = document.getElementById("matchName");
            var nt = document.createTextNode(res.name);
            var match = document.getElementById('match');
            var p = document.getElementById("matchPic");
            var img = document.createElement("img");
            var matchScore = document.getElementById("matchScore");
            var st = document.createTextNode(res.scores);
            var a = document.getElementById("again");
            match.style.display = 'flex';

            matchName.appendChild(nt);
            img.setAttribute("src", res.photo);
            p.appendChild(img);
            matchScore.appendChild(st);
            a.style.display = 'flex';
            //document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
        }).done(function () {
            console.log('success');
        }).fail(function () {
            alert("error");
        });
    });
};