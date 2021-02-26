const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const SALT_WORK_FACTOR=10
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

UserSchema.pre('save', function preSave(next) {
    const user = this;
  
    if (!user.isModified('password')) return next();
  
    return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);
      return bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
    });
  });
  
  UserSchema.methods.comparePassword=async function comparePassword(reqPass){

    return await bcrypt.compare(reqPass, this.password)

}
const UserModel=mongoose.model("user", UserSchema)
module.exports={
    UserModel
}
