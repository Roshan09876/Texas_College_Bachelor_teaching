const express = require("express");
const dns = require("node:dns");
const connectToDatabase = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();

dns.setServers(["1.1.1.1"]);


const app = express();
app.use(express.json());

connectToDatabase();

app.use("/api/auth", require("./routes/userRoute"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Roshan Kumar Khadka ")
});