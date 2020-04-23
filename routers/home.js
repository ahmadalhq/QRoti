const express = require('express')
const HomeController = require('../controller/homeController')
const router = express.Router()

router.get('/', HomeController.homePage)

module.exports = router