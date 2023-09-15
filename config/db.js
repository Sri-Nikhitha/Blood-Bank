const mongoose = require("mongoose");
const colors = require("colors");

console.log(process.env.MONGO_URL);
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sambhavik0502:sambhavi123@cluster0.ovp75te.mongodb.net/bloodbank');
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
