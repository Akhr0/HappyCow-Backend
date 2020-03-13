const fetchDatas = async (collec, req, res, resultCity) => {
  try {
    const id = resultCity.id;
    const coords = resultCity.coords;
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const skip = (page - 1) * limit;
    const rating = Number(req.query.rating);

    let searchCollec;
    if (req.premium === 1) {
      // Create search, with premium only
      searchCollec = collec.find({
        city: id,
        type: req.arrTypes,
        premium: 1
      });

      searchCollec
        .sort({ premium: -1 })
        .sort({ rating: -1 })
        .limit(limit)
        .skip(skip);
    } else if (rating === 1) {
      // Create search, using classic filters
      searchCollec = collec.find({
        city: id,
        type: req.arrTypes
      });

      searchCollec
        .sort({ rating: -1 })
        .limit(limit)
        .skip(skip);
    } else {
      // Create search, using classic filters
      searchCollec = collec.find({
        city: id,
        type: req.arrTypes
      });

      searchCollec
        .sort({ premium: -1 })
        .sort({ rating: -1 })
        .limit(limit)
        .skip(skip);
    }

    const count = await collec.countDocuments({
      city: id,
      type: req.arrTypes
    });
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
