import mongoose from 'mongoose'

const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
})
export default mongoose.model('Users',user)
