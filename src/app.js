const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    next();
    console.log("res 1");
    // res.send("send 1");
  },

  (req, res, next) => {
    console.log("res 2");
    // res.send("send 2");
    next();
  },
  [
    (req, res, next) => {
      console.log("res 3");
      // res.send("send 3");
      next();
    },
    (req, res) => {
      console.log("res 4");
      res.send("send 4");
    },
  ]
);

app.listen(3000, (req, res) => {
  console.log("Server is created listening at port 3000");
});
