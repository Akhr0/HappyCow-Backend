const passwordCheck = (req, res, next) => {
  const password = req.fields.password;
  const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  const passwordChecked = regexPassword.test(password);

  // Condition about password
  if (passwordChecked === false) {
    return res.json({
      message:
        "You must have at least 6 chars including 1 maj, 1 min, 1 num and 1 special char"
    });
  }
  next();
};

module.exports = passwordCheck;
