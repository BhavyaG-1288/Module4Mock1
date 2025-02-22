const express =require("express");


app.UserRouter("/", (req,res)=>{
    try{
        res.status(200).json({msg:"This is a test Route"})

    }
})