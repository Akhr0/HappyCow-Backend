const fetchDatas = async (collec, req, res, resultCity) => {
  try {
    const id = resultCity.id;
    const coords = resultCity.coords;
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const skip = (page - 1) * limit;

    // Create search, using filters
    const searchCollec = collec.find({
      city: id,
      type: req.arrTypes
    });
    searchCollec.limit(limit).skip(skip);

    const count = await collec.countDocuments({ city: id });
    const restaurants = await searchCollec;
    const result = { count, coords, restaurants };

    return {
      result: result,
      status: true
    };
  } catch (error) {
    res.status(400).send({ message: error.message });
    return {
      result: null,
      status: false
    };
  }
};

module.exports = fetchDatas;
