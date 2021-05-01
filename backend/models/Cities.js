const mongoose = require("mongoose");

const citiesSchema = mongoose.Schema({
  city: {
    type: String,
  },
  county: {
    type: String,
  },
  centerLat: {
    type: Number,
  },
  centerLon: {
    type: Number,
  },
  northEastLat: {
    type: Number,
  },
  northEastLon: {
    type: Number,
  },southWestLat: {
    type: Number,
  },southWestLon: {
    type: Number,
  },

});

const Cities = mongoose.model("Cities", citiesSchema);

module.exports = Cities;