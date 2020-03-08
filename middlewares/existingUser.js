const User = require("../models/User");

const existingUser = async (req, res, next) => {
  try {
    const { username, email } = req.fields;
    //Conditions
    const usernameChecked = await User.findOne({
      account: {
        username: username
      }
    });
    const emailChecked = await User.findOne({ email: email });

    if (!usernameChecked && !emailChecked) {
      req.check = true;
    } else {
      req.check = false;
    }
    next();
  } catch (error) {
    req.check = true;
    next();
  }
};

module.exports = existingUser;
