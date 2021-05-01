const Cities = require('../models/Cities')


exports.countyList = async (req, res) => {
  try {
    selectedCity = req.body.selectedCity
    console.log("req.body", selectedCity)
    counties = await Cities.find({city: selectedCity}).exec()
    console.log("counties are fetched SUCCESSFULLY")
    res.json(counties)
  } catch (error) {
    console.log(error.message)
    res.status(400).send("Cities fetch Failed", error.message)
  }

}