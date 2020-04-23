const ModelAll = require('../models/index')

const User = ModelAll.User

class RegisterController{
    //GET registerPage
    static registerPage(req,res){
        const {error} = req.session
        delete req.session.error
        res.render('register', {error})
    }

    //POST registerPage
    static registerProcess(req,res){
        const userdata = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            first_name : req.body.first_name,
            last_name : req.body.last_name
        }

        User
            .create(userdata)
            .then(data => res.redirect('/login'))
            .catch(err => res.send(err))
  
    }
}

module.exports = RegisterController