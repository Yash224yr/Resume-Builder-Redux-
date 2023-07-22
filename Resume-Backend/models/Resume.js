import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Name: String,
    Title: String,
    Email: String,
    Number: String,
    Location: String,
    abouttext: String,
    padding: String,
    Background: String,
    TextAlign: String,
    TextColor: String,
    TextSize: String,
    TextFont: String,
    Titlealign: String,
    TitleSize: String,
    TitleColor: String,
    ContactSize: String,
    Accounts : [String],
    Tagstyle: String,
    role: {
        type: String,
        default: "Visitor"
    }
})

const User = mongoose.model("User", ResumeSchema)

export default User