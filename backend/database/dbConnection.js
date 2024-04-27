import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,
    {dbName:"Event_Message"})
    .then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log("Some error occured while connecting to database:",err);
    });
};