const express = require("express");
const router = express.Router();

const Tech = require("../models/Tech");

// @Route  GET api/techs
// @desc   Get all techs
// @access Puplic
router.get("/", async (req, res) => {
  try {
    const techs = await Tech.find();

    res.status(200).json({
      success: true,
      data: techs
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: "No techs Found"
    });
  }
});

// @Route  POST api/techs
// @desc   add new tech
// @access Puplic
router.post("/", async (req, res) => {
  try {
    const tech = await Tech.create(req.body);

    res.status(201).json({
      success: true,
      data: tech
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// @Route  GET api/techs/:id
// @desc   Delete  tech
// @access Puplic
router.get("/:id", async (req, res) => {
  try {
    const tech = await Tech.findById(req.params.id);

    // if (!tech) {
    //   return res.status(404).json({ success: false });
    // }

    res.status(200).json({
      success: true,
      data: tech
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: "no techs found"
    });
  }
});

// @Route  DELTE api/techs/:id
// @desc   Delete  tech
// @access Puplic
router.delete("/:id", async (req, res) => {
  try {
    const tech = await Tech.findByIdAndDelete(req.params.id);

    if (!tech) {
      return res.status(404).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      error: "no techs found"
    });
  }
});

module.exports = router;
