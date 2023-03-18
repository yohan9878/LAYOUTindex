const router = require("express").Router();
let Location = require("../models/Location");

//Add locations
router.route("/add").post(async(req,res)=>{

    
    const location = req.body.location;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const serialNo = req.body.serialNo;
   
// Check if device with the same serial number already exists
  const existingDevice = await Location.findOne({ serialNo });
  if (existingDevice) {
    return res.status(400).json({ error: "Device with the same serial number already exists" });
  }

    const newLocation = new Location({

        location,
        address,
        phone,
        serialNo
    });
    
    try{
        await newLocation.save();
        res.status(200).json("Location Added");
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Error adding location" });
    }

});

//Display locations
router.route("/").get((req,res)=>{

    Location.find().then((locations)=>{
        res.json(locations)
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;