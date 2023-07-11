import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Generate a JWT token
        const token = jwt.sign({ email: user.email }, "your-secret-key", {
          expiresIn: "1h", // Token expiration time
        });
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'strict' });
        res.status(200).json({ message: "Login successful", token });

      } else {
        res.status(401).json({ message: "Invalaid username or password" });
      }
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});



app.get('/user', (req, res) => {
  const { email } = req.query;
  User.findOne({ email })
    .select("name")
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const userData = { name: user.name };
      res.status(200).json(userData);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
