const mongoose = require("mongoose");

const City = mongoose.model("City", {
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: String,
  coords: {
    lat: String,
    lng: String
  },
  picture: String
});

module.exports = City;
