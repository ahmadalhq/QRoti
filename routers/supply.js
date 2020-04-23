const express = require('express')
const SupplyController = require('../controller/supplyController')
const router = express.Router()
const test = require('../helper/router')


router.get('/', test ,SupplyController.supplyMenu)

router.get('/add', test , SupplyController.addSupplyPage) // add new item

router.post('/add', test , SupplyController.addSupply)

router.get('/search', test , SupplyController.searchPage) // IGNORE FOR WHILE

router.post('/search',test , SupplyController.searching) // IGNORE FOR WHILE

router.get('/edit/:id', test , SupplyController.editSupplyPage) // edit item

router.post('/edit/:id', test , SupplyController.editSupply)

router.get('/delete/:id', test ,SupplyController.deleteSupplyPage) // remove item
router.post('/delete/:id', test ,SupplyController.deleteSupply)



module.exports = router
