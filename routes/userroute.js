const express =require("express");
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT_ROUND)

const UserRouter=("/", (req,res)=>{
    try{
        res.status(200).json({msg:"This is a test Route"})

    }catch(err){
        res.status(500).json({msg:"Somethin went wrong"})
    }
})

app.UserRouter =("/Signup",async(req, res)=>{
    try{
        if(UserInfo){
            let myPlaintextPassword = (...req.body.password);
           bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                // Store hash in your password DB.
            });
            res.status(200).json({msg:"Signup sucess"})

        }else{
            res.status(400).json({msg:"Please checkones"})
        }

    }catch(err){
        res.status(401).json({msg:"Error in Signup"})
    }

});

app.UserRouter=("/Login",async(req,res)={
    try{
        if(UserInDB){
            let myPlaintextPassword = UserInDB
            let hashedPassword = UserInDB
            await bcrypt.compare(myPlaintextPassword, hashedPassword).then(function(result) {
                // result == true
            });
        }
    }catch(err){
        res.status(401).json({msg:"Error in Signup"})
    }
})