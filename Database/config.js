/* eslint-disable no-undef */

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()


const connectDB = async () =>{
    try {
        const connectionString = process.env.mongoDBConnectionString
        console.log("Connecting to DB")
       const connection = await mongoose.connect(connectionString)
       console.log("Connection successfull");
       return connection
        
    } catch (error) {
        console.log("Error",error);
    }
}


export default connectDB