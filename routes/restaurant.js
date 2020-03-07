const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/restaurant", async (req, res) => {
  try {
    const id = req.query.id;
    // Create search
    const searchRestaurant = Restaurant.findOne({
      _id: id
    });
    const result = await searchRestaurant;
    res.json(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
