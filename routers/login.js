const express = require('express')
const LoginController = require('../controller/loginController')
const router = express.Router()

router.get('/', LoginController.loginPage)
router.post('/', LoginController.loginProcess)


module.exports = router
