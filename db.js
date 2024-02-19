const mongoose = require("mongoose");
require("dotenv").config();
//defint the mongodb connection URL
// const mongoURL='process.env.MONGODB_LOCAL'  //replace the hotela with your choice DB

// MongoDB Atlas connection string with the actual username and password - online connection
const mongoURL =process.env.MONGODB_URL;

// Setup the MongoDB connection
mongoose.connect(mongoURL);

//get the default connection
//mongoose maintains a ddefault connection object representing the Mongodb connection
const db = mongoose.connection;

// Define event listeners for DB connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the DB connection
module.exports = db;
