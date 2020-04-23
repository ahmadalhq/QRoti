const {Supply,User,Transaction} = require('../models/index')

const test = require('../helper/tes')

class TransactionController {

    //GET Transaction
    static menu(req,res){

        const p1 =  Supply
                        .findAll()
                        .then(data => {return data})
                        .catch(err => res.send(err.message))

        Promise.all([p1]).then(data => {
            let supply = data[0]
            res.render('transactions/buy', {supply, test : test})
        })
    }

    //POST Transaction
    static process(req,res){

        const {buyer, quantity, SupplyId} = req.body    
        const newBuyer = {buyer, quantity, UserId : req.session.LoginId, SupplyId}

        const p1 = Transaction
                    .create(newBuyer)
                    .then(data => {return data})
                    .catch(err => res.send(err.message))

        Promise.all([p1]).then(data => {
                                        res.redirect('/transaction/list')
                                        })
    }

    // GET /transaction/list
    static transactionList(req,res){
        
        Transaction
            .findAll({include : [Supply,User]})
            .then(data => {
                         res.render('transactions/list',{data, name : req.session.name})
                        // res.send(data)
                        })
            .catch(err => res.send(err.message))

    }

}

module.exports = TransactionController