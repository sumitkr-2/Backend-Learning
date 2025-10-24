// require('dotenv').config({path: './.env'});   this will work fine too

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path : './.env'
});

connectDB()

// now use the IIFE concept 
/*
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error) => {
            console.error("Error connecting to the database", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})()

*/