const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Navee",
    lastName: "JS",
    emailId: "nave@test.com",
    password: "navee@123",
    age: 22,
  });

  try {
    await user.save();
    res.send("User is added to database");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB is connected");
    app.listen(3000, (req, res) => {
      console.log("Server is created listening at port 3000");
    });
  })
  .catch((err) => console.log("not connected"));
