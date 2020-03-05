const createArrTypes = async (req, res, next) => {
  let arrTypes = [];
  const others = [
    "Health Store",
    "Bakery",
    "Other",
    "Ice Cream",
    "Juice Bar",
    "Delivery",
    "Market Vendor",
    "Food Truck",
    "Organization",
    "Catering",
    "Professional",
    "Veg Store"
  ];
  req.query.vegan === "1" && arrTypes.push("vegan");
  req.query.vege === "1" && arrTypes.push("vegetarian");
  req.query.vo === "1" && arrTypes.push("veg-options");
  req.query.store === "1" && arrTypes.push(...others);

  if (
    req.query.vegan === "0" &&
    req.query.vege === "0" &&
    req.query.vo === "0" &&
    req.query.store === "0"
  ) {
    arrTypes = [...others, "vegan", "vegetarian", "veg-options"];
  }

  req.arrTypes = arrTypes;
  next();
};

module.exports = createArrTypes;
