const mongoose =require("mongoose");

const UserSchema =new mongoose.model({
    email:{type:string, required:true},
    password:{type:string, default:"pass@123"},
    role:{type:string, default:"student", enum:["admin"
        ,"user"]}
})


const UserModel = mongoose.Schema("user", UserSchema);


module.exports = UserModel;