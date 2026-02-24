const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.DB_URL;

const connectToDatabase = async() => {
    try {
       await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Error while conencting database is ${error}`);
    }
}

module.exports = connectToDatabase;

