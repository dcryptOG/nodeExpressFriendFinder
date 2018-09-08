
// array of freinds pervert
var friends = [{
  name: "Candy Cummings",
  photo: "",
  scores: [9, 5, 7, 7, 1, 7, 5, 1, 7, 1]
}, {
  name: "Laura Toner",
  photo: "",
  scores: [1, 5, 9, 7, 5, 9, 5, 9, 1, 7]
}, {
  name: "Chrissy Boner",
  photo: "",
  scores: [7, 9, 9, 1, 5, 1, 5, 7, 1, 5]
},{
  name: "Dr. Milk Dick Phd",
  photo: "",
  scores: [5, 1, 9, 9, 7, 5, 1, 5, 9, 9]
}, {
  name: "Bi-Curious George",
  photo: "",
  scores: [5, 7, 5, 9, 1, 7, 1, 5, 9, 1]
}, {
  name: "Tanner Cox",
  photo: "",
  scores: [1, 5, 5, 1, 5, 7, 9, 9, 5, 7]
}, {
  name: "Dick Pound",
  photo: "",
  scores: [1, 1, 5, 9, 7, 1, 5, 9, 9, 7]
}];

module.exports = friends;


// var myObj, i, x = "";
// myObj = {
//     "name":"John",
//     "age":30,
//     "cars":[ "Ford", "BMW", "Fiat" ],
//     "name":"John",
//     "age":30,
//     "cars":[ "Gay", "Fuck", "Fiat" ]
// };

// for (i = 0; i < myObj.cars.length; i++) {
//     x += myObj.cars[i] + "<br>";
// }

// console.log(x);
/*

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as


*/ 



// var newFriends = friends.filter(function(freind) {
//   return friend.scores
//   console.log(friend.scores)
  // return number>0;
  // console.log(number>0)
// });






 //export array

// module.exports = friends;
