const express = require("express");
const dogstatsd = require("node-dogstatsd").StatsD;
const app = express();
app.get("/", (req, res) => {
  c = new dogstatsd(`${process.env.DOGSTATSD_HOST_IP}`, 8125);
  x = new dogstatsd("localhost", 8125);
  console.log(x);
  console.log(c);
  c.increment("fucking.asshole");
  x.increment("fucking.asshole");
  res.send("hello World");
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
