const express = require("express");
const router = express.Router();

const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const User = require("../models/User");

const passwordCheck = require("../middlewares/passwordCheck");
const fillFields = require("../middlewares/fillFields");
const existingUser = require("../middlewares/existingUser");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post(
  "/user/sign_up",
  fillFields,
  passwordCheck,
  existingUser,
  async (req, res) => {
    try {
      //In one line try
      const {
        username,
        password,
        email,
        vegStatus,
        homeCity,
        birthYear
      } = req.fields;

      // Condition about username and mail. If they don't exist then check = true, then ...
      if (req.check === true) {
        // Making TSH
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(password + salt).toString(encBase64);

        // Construct new User
        const newUser = new User({
          account: {
            vegStatus,
            homeCity,
            birthYear
          },
          username,
          email,
          token,
          salt,
          hash
        });

        // Push in BDD
        await newUser.save();
        // Response to front
        res.json({
          _id: newUser.id,
          token: newUser.token
        });

        // If user already exists
      } else {
        res.json({ message: "This user already exists" });
      }
    } catch (error) {
      res.json({ message: error.message });
      console.error(error.message);
    }
  }
);

router.post("/user/log_in", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });

    // Does it exist ?
    if (user) {
      const hashToCompare = SHA256(req.fields.password + user.salt).toString(
        encBase64
      );
      // Two hashes are they the same ?
      if (hashToCompare === user.hash) {
        return res.json({
          _id: user.id,
          token: user.token
        });
      } else {
        res.json({ message: "Unauthorized authentication" });
      }
    } else {
      res.json({ message: "Unauthorized authentication" });
    }
  } catch (error) {
    res.json(error.message);
    console.error(error.message);
  }
});

router.get("/user/infos", isAuthenticated, async (req, res) => {
  res.json({ username: req.user.username, avatar: req.user.avatar });
});

module.exports = router;
