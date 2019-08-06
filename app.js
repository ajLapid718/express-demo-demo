const express = require('express');
const app = express();
const apiRouter = require("./routes");
const bodyParser = require("body-parser");

const students = [
    {
      "id": 4,
      "firstName": "Jerry",
      "lastName": "Jingle",
      "email": "jerryjingle@bells.com",
      "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
      "gpa": null,
      "createdAt": "2018-12-06T19:58:21.314Z",
      "updatedAt": "2018-12-06T19:58:21.314Z",
      "campusId": 3
    },
    {
      "id": 6,
      "firstName": "Barry",
      "lastName": "Huang",
      "email": "someemailgoeshere@yahoo.com",
      "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
      "gpa": null,
      "createdAt": "2018-12-06T20:04:04.275Z",
      "updatedAt": "2018-12-06T20:04:04.275Z",
      "campusId": 1
    },
    {
      "id": 1,
      "firstName": "justin",
      "lastName": "mintzer",
      "email": "mintzer.justin@gmail.com",
      "imageUrl": "https://i.imgur.com/N9Koe2G.jpg",
      "gpa": 4,
      "createdAt": "2018-12-05T23:02:45.257Z",
      "updatedAt": "2018-12-05T23:02:45.257Z",
      "campusId": 1
    },
    {
      "id": 24,
      "firstName": "first",
      "lastName": "LAST",
      "email": "email@email.com",
      "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
      "gpa": null,
      "createdAt": "2018-12-10T04:50:33.677Z",
      "updatedAt": "2018-12-10T04:50:33.677Z",
      "campusId": null
    },
    {
      "id": 2,
      "firstName": "bob",
      "lastName": "jones",
      "email": "bobbyboy1234@yahoo.com",
      "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
      "gpa": 3.7,
      "createdAt": "2018-12-05T23:02:45.270Z",
      "updatedAt": "2019-06-14T00:15:35.429Z",
      "campusId": 1
    }
  ];

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use("/api", apiRouter);

// // GET localhost:3000/students;
// app.get("/students", (req, res, next) => {
//   res.status(200).send(students);
// })

// app.get("/students/:studentId", (req, res, next) => {
//   res.status(200).send(students);
// })

// app.post("/students", (req, res, next) => {
//   // I want everyone to push into the students array defined above these routes;
//   let newStudent = req.body;
//   console.log("newStudent:", newStudent);
//   students.push(newStudent);
//   res.json(newStudent);
// })

/*

    {
      "id": 77,
      "firstName": "Elise",
      "lastName": "Harris",
      "email": "eliseharris@gmail.com",
      "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
      "gpa": 4,
      "createdAt": "2018-12-06T19:58:21.314Z",
      "updatedAt": "2018-12-06T19:58:21.314Z",
      "campusId": 2
    }

*/

// app.get("/campuses", (req, res, next) => {

// })

// app.get(["/apple", "/ale"], (req, res, next ) => {
//   res.status(200).send("Apple or Ale?")
// });

// app.get("/who+a+", (req, res, next) => {
//   res.status(200).send("whoa whoa whoa!!!");
// });

// app.get("/users/:firstName/:lastName", (req, res, next) => {
//   res.status(200).send(`hello my friend ${req.params.firstName} ${req.params.lastName}`)
// });

// app.get("/words/random/:randomWord", (req, res, next) => {
//   res.status(200).send(`reversed of passed in word: ${req.params.randomWord.split("").reverse().join("")}`)
// });

// app.get("*", (req, res, next) => {
//   res.status(404).send("nothing matched!")
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});