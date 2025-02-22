
const express =require("express");
const connectToDb = require("./config");
require('dotenv').config()
const app =express();
app.use(express.json());
let PORT=process.env.SERVER_PORT

app.use("/",(req, res)=>{
    res.send("This is a Test route");
});
app.listen(PORT,()=>{
    console.log("Server started");
    connectToDb();
})
