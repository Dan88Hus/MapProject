const express = require('express')

const router = express.Router()

// controllers
const {countyList} = require('../controllers/counties')

//routes

router.post('/counties', countyList);

module.exports = router