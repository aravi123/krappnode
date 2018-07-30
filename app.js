const express = require("express");
const app = express();
var StatsD = require("dogstatsd-node").StatsD,
  client = new StatsD(`${process.env.DOGSTATSD_HOST_IP}`, 8125);
app.get("/", (req, res) => {
  // c = new dogstatsd(`${process.env.DOGSTATSD_HOST_IP}`, 8125);
  // x = new dogstatsd("localhost", 8125);
  // console.log(x);
  // console.log(c);
  // c.increment("fucking.asshole");
  // x.increment("fucking.asshole");
  client.set(["foo", "bar"], 42).send(function(error, bytes) {
    //this only gets called once after all messages have been sent
    console.log(error);
    if (error) {
      console.error("Oh noes! There was an error:", error);
    } else {
      console.log("Successfully sent", bytes, "bytes");
    }
  });
  res.send("hello World");
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
