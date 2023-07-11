import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role:{
        type : String,
        default : "Visitor"
    }
})

const User = mongoose.model("User", ResumeSchema)

export default User