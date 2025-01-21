const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middleware/adminAuth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data Sent");
});

app.get("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User logged in successfully");
});

app.get("/admin/deleteData", (req, res) => {
  res.send(" Data is Deleted ");
});

app.listen(3000, (req, res) => {
  console.log("Server is created listening at port 3000");
});
