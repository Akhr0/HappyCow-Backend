const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  if (req.headers.authorization) {
    // Call user with this token
    const user = await User.findOne({
      token: req.headers.authorization.replace("Bearer ", "")
    });
    // If user doen-sn't exist then ...
    if (!user) {
      return res.json({ error: "Unauthorized" });
    }
    // If user exists, then ..
    else {
      // Add user too req
      req.user = user;
      // Go to next stage
      next();
    }
  } else {
    return res.json({ error: "Unauthorized" });
  }
};

module.exports = isAuthenticated;
