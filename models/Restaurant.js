const mongoose = require("mongoose");

const Restaurant = mongoose.model("Restaurant", {
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String
  },
  location: {
    lng: String,
    lat: String
  },
  phone: String,
  thumbnail: String,
  type: String,
  category: Number,
  rating: Number,
  vegan: Number,
  vegOnly: Number,
  link: String,
  description: String,
  pictures: Array,
  price: String,
  website: String,
  facebook: String,
  nearbyPlacesIds: Array,
  placeId: String,
  premium: Number,
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  favUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

module.exports = Restaurant;
