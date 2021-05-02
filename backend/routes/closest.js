const express = require('express')

const router = express.Router()

// controllers
const {closestList} = require('../controllers/closest')

//routes

router.post('/closest', closestList);

module.exports = router