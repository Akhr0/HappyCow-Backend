const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  hash: String,
  salt: String,
  token: String,
  username: {
    type: String,
    match: /^[\w]{6,16}$/,
    trim: true,
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    default:
      "https://d1mvj2ulps5lli.cloudfront.net/avatars/default/svg/nobody.square.svg"
  },
  owned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant"
    }
  ],
  points: { type: Number, default: 5 },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  account: {
    vegStatus: {
      type: String,
      required: true
    },
    homeCity: {
      type: String,
      required: true
    },
    birthYear: {
      type: String,
      required: true
    },
    joined: { type: Date, default: Date.now },
    newsLetter: { type: Boolean, default: true },
    notifications: { type: Boolean, default: true },
    description: { type: String, default: "" },
    reasonsVeg: { type: String, default: "" },
    reasonsSite: { type: String, default: "" },
    favPlaces: { type: String, default: "" },
    favFood: { type: String, default: "" },
    favMusic: { type: String, default: "" },
    favPerson: { type: String, default: "" },
    vegStuff: { type: String, default: "" },
    path: { type: String, default: "" },
    relationShip: { type: String, default: "" },
    starSign: { type: String, default: "" }
  }
});

module.exports = User;
