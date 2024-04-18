import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes'

require('dotenv').config()
const app = express()
app.use(express.json());

mongoose.connect(process.env.MONGOOSE).then((db) => {
    console.log("Mongoose Db Connected")
}).catch((error) => console.log("Connection Error"))

app.use('/api/users', router)

app.listen(process.env.PORT, () => {
    console.log(`server started at port number ${process.env.PORT}`)
})

