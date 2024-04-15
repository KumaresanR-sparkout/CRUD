import mongoose from 'mongoose'

const user=new mongoose.Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:30,
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
export default mongoose.model('users',user)
