const express = require("express");
const router = express.Router();
const fetchDatas = require("../functions/fetchDatas");
const fetchCity = require("../functions/fetchCity");
const City = require("../models/City");
const Restaurant = require("../models/Restaurant");

// Import createArrTypes
const createArrTypes = require("../middlewares/createArrTypes");

router.get("/search", createArrTypes, async (req, res) => {
  try {
    console.log("je passe");
    const resultCity = await fetchCity(req, res, City);
    console.log(resultCity);
    const result = await fetchDatas(Restaurant, req, res, resultCity);
    res.json(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
