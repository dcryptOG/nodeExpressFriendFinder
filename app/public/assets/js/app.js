window.onload = function () {


    var userName = document.getElementById('name');
    var userPhoto = document.getElementById('photo');
    var score = document.getElementsByClassName('scoreMenu');
    var text = document.getElementsByClassName('textInput');
    var submit = document.getElementById('submit');
    var userScore = [];

    var currentURL = window.location.origin;
    // this info can be sent from survey in app.js
    document.querySelector('#del')
        .addEventListener('click', function () {
            var el = document.querySelector('.matchInfo');
            el.parentNode.removeChild(el);
        });

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
            // $(".result").html(userScore);
            console.log(res);
            console.log('test');
            console.log(res.name);
            var h3 = document.createElement("H3"); // Create a <h1> element
            var match = document.getElementById('match');
            var p = document.createElement("picture");
            var img = document.createElement("img");
            var btn = document.createElement("button");
            var bt = document.createTextNode("DELETE");
            var nt = document.createTextNode(res.name);
            h3.setAttribute("id", "matchName");
            h3.appendChild(nt);
            match.appendChild(h3);
            img.setAttribute("src", res.photo);
            p.appendChild(img);
            p.setAttribute("id", "matchPhoto")
            match.appendChild(p);
            btn.appendChild(bt);
            btn.setAttribute("id", "del");
            match.appendChild(btn);

            //document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
        }).done(function () {
            console.log('success');
        }).fail(function () {
            alert("error");
        });
    });

};