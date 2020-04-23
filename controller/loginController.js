const ModelAll = require('../models/index')
const {compare} = require('../helper/bcrypt')

const User = ModelAll.User
const Supply = ModelAll.Supply

class LoginController{
    //displaying login page GET loginPage
    static loginPage(req,res){
        const {error} = req.session
        delete req.session.error
        res.render('login',{error})
    }

    // Process login after press login button POST loginPage
    static loginProcess(req,res){

        const p1 = User
                    .findOne({where:{username : req.body.username}})
                    .then(data => {return data})
                    .catch(err => {
                        req.session.error = err.message
                        res.redirect("/login")
                    })

        Promise.all([p1]).then(data => {
            let scan = data[0]
            if(scan){
                if(compare(req.body.password,scan.password)){
                    req.session.isLogin = true 
                    req.session.name = scan.fullname
                    req.session.LoginId = scan.id
                    res.redirect("/supply")
                }else{
                    req.session.error = "wrong email/password"
                    res.redirect("/login")
                }
            }else{
                req.session.error = "wrong email/password"
                res.redirect("/login")
            }
                req.session.error = "wrong email/password"
                res.redirect("/login")
        })

    }
}

module.exports = LoginController