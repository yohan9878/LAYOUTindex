const router = require("express").Router();
const Device = require("../models/Device");

// Add device
router.route("/add").post(async (req, res) => {
  const serialNo = req.body.serialNo;
  const type = req.body.type;
  const location = req.body.location;
  const image = req.body.image;
  const status = req.body.status;

  // Check if device with the same serial number already exists
  const existingDevice = await Device.findOne({ serialNo });
  if (existingDevice) {
    return res.status(400).json({ error: "Device with the same serial number already exists" });
  }

  const newDevice = new Device({
    serialNo,
    type,
    location,
    image,
    status,
  });

  try {
    await newDevice.save();
    res.status(200).json("Device added");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding device" });
  }
});

// Display devices
router.route("/").get(async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting devices" });
  }
});

// Delete device
router.route("/delete/:id").delete(async (req, res) => {
  const deviceId = req.params.id;

  try {
    await Device.findByIdAndDelete(deviceId);
    res.status(200).json({ status: "Device deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting device" });
  }
});

module.exports = router;
