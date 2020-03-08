const fillFields = (req, res, next) => {
  //In one line try
  const {
    username,
    password,
    email,
    vegStatus,
    homeCity,
    birthYear
  } = req.fields;

  // Condition no username used
  if (!username) {
    return res.json({ message: "Username is missing" });
  }
  // Condition no password used
  if (!password) {
    return res.json({ message: "Password is missing" });
  }
  // Condition no email used
  if (!email) {
    return res.json({ message: "Email is missing" });
  }
  // Condition no status used
  if (!vegStatus) {
    return res.json({ message: "Veg-Status is missing" });
  }
  // Condition no homecity used
  if (!homeCity) {
    return res.json({ message: "Home City is missing" });
  }
  // Condition no birthyear used
  if (!birthYear) {
    return res.json({ message: "Birthyear is missing" });
  }
  next();
};

module.exports = fillFields;
