/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import userRouter from './Router/router.min.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';



dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.listen(process.env.PORT, ()=>{
    console.log("App is running in", process.env.PORT)
})
const home = (req, res)=>{
    try {
        
        res.status(200).json({message:"Hello this is the homepage"})
    } catch (error) {
        res.status(500).json({message: error.response.data.message})
    }
}
app.get('/', home)
app.use('/api', userRouter)
// app.use('/api', clientRouter)

connectDB()