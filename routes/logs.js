const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// @Route  GET api/logs
// @desc   Get all logs
// @access Puplic
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find();

    // if (!logs) {
    //   return res
    //     .status(404)
    //     .json({ success: true, message: "no logs found.." });
    // }

    res.status(200).json({
      success: true,
      data: logs
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: "No logs Found"
    });
  }
});

// @Route  POST api/logs
// @desc   add new logs
// @access Puplic
router.post("/", async (req, res) => {
  try {
    const log = await Log.create(req.body);

    res.status(201).json({
      success: true,
      data: log
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// @Route  PUT api/logs/:id
// @desc   Update new logs
// @access Puplic
router.put("/:id", async (req, res) => {
  try {
    const log = await Log.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: log });
  } catch (err) {
    res.status(404).json({ success: false, message: "logs not found!" });
  }
});

// @Route  DELETE api/logs/:id
// @desc   Update new logs
// @access Puplic
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(404).json({ success: false, message: "logs not found!" });
  }
});

module.exports = router;
