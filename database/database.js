const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const DB_URL = `mongodb+srv://${userName}:${password}@hackstacknodejsauth.abezpnd.mongodb.net/?retryWrites=true&w=majority`;

const DBConnection = async () => {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Db connected");
  } catch (err) {
    console.log("could not connect to database ", err.message);
  }
};

module.exports = DBConnection;
