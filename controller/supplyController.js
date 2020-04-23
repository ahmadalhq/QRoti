const {Supply,User} = require('../models/index')


// const Supply = ModelAll.Supply

// const User = ModelAll.User


class SupplyController{

    // GET addSupply
    static addSupplyPage(req,res){
        res.render('./supply/add')
    }

    // POST addSupply
    static addSupply(req,res){
        const newSupply = {
            name : req.body.name,
            product_type : req.body.type,
            price : req.body.price,
            quantity : req.body.quantity
        }

        Supply
            .Create(newSupply)
            .then(data => res.render('',{newSupply}))
            .catch(err => res.send(err.message))
 
    }

    // GET search
    static searchPage(req,res){
        res.render('./supply/search')
        res.redirect('/supply')
    }

    // POST search 
    static searching(req,res){

        Supply
            .findAll({where : {name : req.body.search}})
            .then(data => res.render('./supply/search',{data}))
            .catch(err => res.send(err.message))
    }   

    // GET menu
    static supplyMenu(req,res){


        Supply
            .findAll({order : [['id','ASC']]})
            .then(data => res.render('./supply/menu', {data, name : req.session.name}))
            .catch(err => res.send(err.message))
              
    }

    // GET Edit
    static editSupplyPage (req,res){
        
        let addid = req.params.id

        Supply
            .findByPk(req.params.id)
            .then(data => {
                data = [data]
                res.render('./supply/edit', {data} )})
            .catch(err => res.send(err))
    }

    // POST Edit
    static editSupply(req,res){

        Supply
            .update({
                name : req.body.name,
                product_type : req.body.type,
                price : req.body.price,
                quantity : req.body.quantity 
                },{where : {id : req.params.id}})
            .then(data => { 
                res.redirect('/supply')
            })
            .catch(err => res.send(err))
    }

    // GET delete
    static deleteSupplyPage(req,res){

        let acc = {
            first_name : req.body.first_name,
            last_name : req.body.last_name
        }

        Supply
            .findByPk(req.params.id)
            .then(data => {
                data = [data]
                res.render('./supply/delete', {data,acc})
            })
            .catch(err => res.send(err.message))
    }

    // POST delete
    static deleteSupply(req,res){
        
        let acc = {
            first_name : req.body.first_name,
            last_name : req.body.last_name
        }

        Supply
            .destroy({where : {id : req.params.id}})
            .then(data => res.render('/supply', {first_name :acc.first_name, last_name : acc.last_name}))
            .catch(err => res.send(err.message))
    }
}

module.exports = SupplyController