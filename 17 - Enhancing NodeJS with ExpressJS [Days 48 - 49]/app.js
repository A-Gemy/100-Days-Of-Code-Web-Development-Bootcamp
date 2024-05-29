const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currentyear", function (req, res) {
  res.send("<h1>The current year is " + new Date().getFullYear() + ".</h1>");
}); // localhost:3000/currentyear

// app.get("/", function (req, res) {
//   res.send("<h1>Hello World, from backend!</h1>");
// }); // localhost:3000/

app.get("/", function (req, res) {
  res.send(
    `<form action="/store-user" method="POST"><label>Your Name</label> <input type="text" name="username"> <button>Submit</button></form>`
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join("data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);