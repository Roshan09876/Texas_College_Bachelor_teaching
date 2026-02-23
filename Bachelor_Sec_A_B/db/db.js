// bluep09876_db_user
// FO8bCYTycLhXA4uA

const mongoose = require("mongoose")

const DB_URL = "mongodb+srv://bluep09876_db_user:FO8bCYTycLhXA4uA@cluster0.grn7eaf.mongodb.net/";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Database connection error is ${error}`)
    }
}

module.exports = connectToDatabase;
