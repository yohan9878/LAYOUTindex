const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const deviceSchema = new Schema({

    serialNo :{
        type : String,
        required: true,
        unique: true
    },
   
    type : {
        type: String,
        required: false
    },
    location : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
        
    },
    status :{
        type: String,
        // required: true
    }


})

const Device = mongoose.model("Device",deviceSchema);

module.exports = Device;