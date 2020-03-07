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
    const resultCity = await fetchCity(req, res, City);
    if (resultCity.id) {
      const result = await fetchDatas(Restaurant, req, res, resultCity);
      if (result.status === true) {
        res.json(result);
      } else {
        res.status(400);
      }
    }
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
