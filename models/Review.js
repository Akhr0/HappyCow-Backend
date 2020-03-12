const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  created: { type: Date, default: Date.now }
});

module.exports = Review;
