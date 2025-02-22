const mongoose =require("mongoose");

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to Db")
    }catch(err){
        console.log("failed to connectDb")
    }
};

module.exports = connectToDb;