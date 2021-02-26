const { NotExtended } = require("http-errors")

const checkSign=(req,res, next)=>{
    if(req.session.user){
        next();
    }else{
        let err = new Error("Not logged in!");
        res.redirect("/auth/login");
        next(err);
    }
}
module.exports={
    checkSign
}