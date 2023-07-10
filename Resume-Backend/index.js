import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"
import cookieParser from "cookie-parser"
import User from "./models/Resume"

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser)


mongoose.connect("",{
    usenewUrlParser: true ,
    useUnifiedTopology : true,
})



app.listen(3000, ()=>{
    console.log("Server connected to port 3000")
})