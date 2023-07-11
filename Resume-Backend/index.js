import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "./models/Resume.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect("mongodb+srv://yash224yr:FraGod2op@cluster0.tskkwjs.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        res.json({ error: "Email already exists" });
      } else {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            User.create({
              name,
              email,
              password: hash,
            })
              .then(() => res.json({ status: "OK" }))
              .catch((error) => res.json({ error: error.message }));
          })
          .catch((error) => res.json({ error: error.message }));
      }
    })
    .catch((error) => res.json({ error: error.message }));
});

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
