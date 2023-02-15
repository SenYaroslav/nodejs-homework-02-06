const mongoose = require("mongoose");

const { MONGO_CONNECTION_STRING } = process.env;

const connectMongo = async() => {
  try {
    mongoose
      .connect(MONGO_CONNECTION_STRING)
      .then(() => console.log("Database connection successful."));
  } catch (err) {
    console.log(`Server not running. Error message: ${err.message}`)
    process.exit(1);
  }
}

module.exports = {
    connectMongo
}
