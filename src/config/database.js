const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://letnavelearn:VNIuFFvaoN5SoMdp@nodelearn.wfqh7.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
