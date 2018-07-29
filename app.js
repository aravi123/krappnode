const express = require("express");
const mongojs = require("mongojs");
const app = express();
let db = mongojs("mongodb://mongo:27017/Test", ["test"]);
app.get("/", (req, res) => {
  console.log(process.env);
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

app.get("/display", (req, res) => {
  db.test.find({}, (err, docs) => {
    res.send(docs);
  });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
