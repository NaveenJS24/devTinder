const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Naveen", lastName: "JS" });
});
app.post("/user", (req, res) => {
  res.send("Data is posted 2 database successfully");
});
app.patch("/user", (req, res) => {
  res.send("Data is patched");
});
app.delete("/user", (req, res) => {
  res.send("Data is deleted from database");
});

app.listen(3000, (req, res) => {
  console.log("Server is created listening at port 3000");
});
