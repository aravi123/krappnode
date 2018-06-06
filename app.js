const express = require("express");
const mongojs = require("mongojs");
const app = express();
let db = mongojs("mongodb://mongo:27017/Test", ["test"]);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/hello", (req, res) => {
  db.test.insert({ name: "hello" }, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("sucess");
      res.send("Mongo Connected");
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
