class AuthController{
    registerView(req, res){
        let message=""
        res.render("register", {message:message})
    }
}

module.exports=new AuthController()