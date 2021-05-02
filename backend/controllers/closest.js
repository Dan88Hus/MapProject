const Cities = require('../models/Cities')

exports.closestList = async (req, res) => {
  try {
    let splittedLatCorArray =[]
    let splittedLonCorArray = []
    splittedLatCor = req.body.splittedLatCor
    // console.log(splittedLatCor) //ex : 456.65 
    splittedLonCor = req.body.splittedLonCor
    splittedLatCorArray.push(splittedLatCor)
    splittedLonCorArray.push(splittedLonCor)
    console.log(splittedLatCorArray) //ex : ['456.65']
    const splittedLatCorClosest = await Cities.aggregate([
      { "$addFields": {
        "items": {
          "$filter": {
            "input": "$centerLat",
            "as": "centerLat",
            "cond": { "$gte": [ "$$centerLat", JSON.parse(JSON.stringify(splittedLatCorArray)) ] }
          }
        }
      }},
      { "$addFields": { "items": { "$slice": [ "$items", 0, 1 ] }}},
      { "$unwind": "$items" },
      { "$project": { "items": 1, "name": 1 }}
    ])
    //its already array but it says input to $filter must be an array not int
    // PROBLEM
    console.log("aggregate fetched SUCCESSFULLY", req.body)
    res.json(splittedLatCorClosest)
  } catch (error) {
    console.log(error.message)
    res.status(400).send("Cities fetch Failed", error.message)
  }

}