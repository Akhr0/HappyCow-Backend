const fetchCity = async (req, res, City) => {
  try {
    const city = req.query.location;
    const searchCity = City.findOne({ name: city });
    const result = await searchCity;
    return {
      id: result._id,
      coords: { lat: Number(result.coords.lat), lng: Number(result.coords.lng) }
    };
  } catch (error) {
    res
      .status(400)
      .json({ error: "Cette ville ne fait pas dispo sur ce site" });
  }
};

module.exports = fetchCity;
