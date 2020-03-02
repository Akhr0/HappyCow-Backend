const fetchCity = async (req, res, City) => {
  try {
    const city = req.query.location;
    const searchCity = City.findOne({ name: city });
    const result = await searchCity;
    return result._id;
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = fetchCity;
