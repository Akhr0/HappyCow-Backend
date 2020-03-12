const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const Review = require("../models/Review");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/review/restaurant", async (req, res) => {
  try {
    const id = req.query.id;
    const searchReview = Review.find({
      restaurant: id
    });
    searchReview.sort({ created: -1 });
    const result = await searchReview;
    res.json(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.post("/restaurant/review/post", isAuthenticated, async (req, res) => {
  try {
    const { text, title, restaurant } = req.fields;
    const user = req.user._id;

    // Construct new User
    const newReview = new Review({
      title,
      text,
      restaurant,
      user
    });

    // Push in BDD
    await newReview.save();
    res.json({ message: "Review successfully posted" });
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
