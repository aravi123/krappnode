const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/hello", (req, res) => {
  res.send("Kubernetes is awesome");
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
