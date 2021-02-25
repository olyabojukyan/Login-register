const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const Salt_round=10
const Schema=mongoose.Schema

const UserSchema=new Schema({
    username: {
        type: String
},
password: {
    type: String,
    
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
    }
}, {
    timestamps: true
})

UserSchema.pre("save", preSave(next)=>{
    const user=this

    if(!user.password.isModified()) return next()
    return bcrypt.genSalt("Salt_round", (err, hashSalt)=>{
        if(err) next (err)
        bcrypt.hash(user.password, hashSalt, (err, hash)=>{
            if(err) next(err)
            user.password=hash
            next()
        })
    })
})

UserSchema.methods.comparePassword=function compirePassword(reqPass, cb){
    bcrypt.compare(reqPass, this.password, (err, match)=>{
        if(err) return cb(err)
        return cb(null, match)
    })
}

const UserModel=mongoose.model("user", UserSchema)
module.exports={
    UserModel
}
