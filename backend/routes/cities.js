const express = require('express')

const router = express.Router()

// controllers
const {listAllCities} = require('../controllers/cities')

//routes

router.get('/cities', listAllCities);

module.exports = router