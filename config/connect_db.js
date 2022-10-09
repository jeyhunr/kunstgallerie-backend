const mongoose = require("mongoose");
require("dotenv").config();

const env = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbURI: process.env.DB_URI,
};

module.exports = async () => {
  mongoose.connect(`mongodb+srv://${env.dbUser}:${env.dbPass}@${env.dbURI}`);
    mongoose.connection.on("open", () => {
    console.log("Connect to MongoDB was successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Connection was fail: ", err);
  });
  mongoose.Promise = global.Promise;
};