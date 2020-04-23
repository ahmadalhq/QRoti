class LogoutController{

    static logout(req,res){
        delete req.session.isLogin
        res.redirect('/login')
    }

}

module.exports = LogoutController