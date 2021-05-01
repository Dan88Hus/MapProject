const Cities = require('../models/Cities')


exports.listAllCities = async (req, res) => {
  try {
    cities = await Cities.find({}).exec()
    console.log("cities are fetched SUCCESSFULLY")
    res.json(cities)
  } catch (error) {
    console.log(error.message)
    res.status(400).send("Cities fetch Failed", error.message)
  }

}