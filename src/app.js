const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Test msg");
});
app.use("/", (req, res) => {
  res.send("Welcome to dashboard");
});

app.listen(3000, (req, res) => {
  console.log("Server is created listening at port 3000");
});
