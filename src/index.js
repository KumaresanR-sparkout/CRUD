import express from 'express'
import mongoose from 'mongoose'
import router from './route'
require('dotenv').config()
const app=express()
app.use(express.json());
app.use(router)
mongoose.connect(process.env.MONGOOSE).then((e)=>{
    console.log("Mongoose Db Connected")
}).catch((e)=>console.log("Connection Error"))


app.listen(process.env.PORT,()=>{
    console.log(`server started at port number ${process.env.PORT}`)
})
