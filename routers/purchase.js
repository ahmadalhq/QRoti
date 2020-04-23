const express = require ('express')
const router = express.Router()
const TransactionController = require('../controller/transactionController')
const test = require('../helper/router')


router.get('/',test, TransactionController.menu)
router.post('/',test, TransactionController.process)
router.get('/list',test, TransactionController.transactionList)

module.exports = router