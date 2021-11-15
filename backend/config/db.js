const mongoose = require("mongoose");
const { database } = require("./keys.js");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(database.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
