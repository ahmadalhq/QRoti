class HomeController{
    // get '/home' and '/'
    static homePage(req,res){
        res.render("./index")
    }
}

module.exports = HomeController