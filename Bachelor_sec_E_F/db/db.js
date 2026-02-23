const mongoose = require("mongoose");

const connectToDatabase = async() => {
    try {
       await mongoose.connect(process.env.DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Error while conencting database is ${error}`);
    }
}

module.exports = connectToDatabase;