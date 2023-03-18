const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({

    location:{
        type: String,
        required: true
       
    },

    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        length: 10
    },

    serialNo:{
        type: String,
        unique: true,
        required: true
    }

    
})

const Location = mongoose.model("Location",locationSchema);

module.exports = Location;