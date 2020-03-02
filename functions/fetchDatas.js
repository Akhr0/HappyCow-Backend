const fetchDatas = async (collec, req, res, id) => {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const skip = (page - 1) * limit;

    // Create search, using filters
    const searchCollec = collec.find({ city: id });
    searchCollec.limit(limit).skip(skip);

    const count = await collec.countDocuments({ city: id });
    const restaurants = await searchCollec;
    const result = { count, restaurants };

    return result;
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = fetchDatas;
