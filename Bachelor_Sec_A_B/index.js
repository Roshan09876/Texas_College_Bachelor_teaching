const express = require("express");
const connectToDatabase = require("./db/db");
// const dns = require("node:dns");
const dotenv = require("dotenv");
dotenv.config();

// dns.setServers(["1.1.1.1"]);

const app = express();

app.use("/auth", require("./routes/userRoutes"));

connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Roshan Kumar Khadka ")
});

 