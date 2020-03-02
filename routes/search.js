const express = require("express");
const router = express.Router();
const fetchDatas = require("../functions/fetchDatas");
const fetchCity = require("../functions/fetchCity");
const City = require("../models/City");
const Restaurant = require("../models/Restaurant");

router.get("/search", async (req, res) => {
  try {
    const id = await fetchCity(req, res, City);
    const result = await fetchDatas(Restaurant, req, res, id);
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
