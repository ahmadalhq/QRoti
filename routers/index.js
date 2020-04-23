const express = require ('express')
const router = express.Router()
const homePage = require('./home.js')
const loginPage = require('./login.js')
const registerPage = require('./register.js')
const supplyPage = require('./supply.js')
const purchasePage = require('./purchase.js')
const LogoutController = require('../controller/logoutController')


// router.use ('/',(req,res) => router.use ('/home', homePage))
router.use ('/home',  homePage) // home page
router.use ('/',  homePage) // home page
router.get ('/logout', LogoutController.logout)
router.use ('/login', loginPage) // login user
router.use ('/register', registerPage) // register new user
router.use ('/supply', supplyPage) // access item menu
router.use ('/transaction', purchasePage) // access kasir


module.exports = router