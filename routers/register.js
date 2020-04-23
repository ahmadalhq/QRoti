const express = require('express')
const RegisterController = require('../controller/registerController')
const router = express.Router()

router.get('/', RegisterController.registerPage)
router.post('/', RegisterController.registerProcess)


module.exports = router
