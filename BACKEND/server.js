const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

const deviceRouter = require("./routes/devices.js");
app.use("/device",deviceRouter);

const locationRouter = require("./routes/locations.js");
app.use("/location",locationRouter);


app.listen(PORT, () => {
    console.log(`Server up and running on port number: ${PORT}`)

})

