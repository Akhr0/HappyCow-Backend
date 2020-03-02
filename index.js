const express = require("express");
const app = express();
const cors = require("cors");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");
app.use(formidableMiddleware());
app.use(cors());
require("dotenv").config();

const searchRoutes = require("./routes/search");
app.use(searchRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});