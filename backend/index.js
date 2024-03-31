const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')
const uploadController = require('./controllers/uploadController');
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");

// db connecting
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Error with Database Connecting:", error);
  });


// middlewares
//cors
app.use(cors({
    origin : "http://localhost:3000"
}));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

app.use("/auth", authController);
app.use("/property", propertyController);
app.use('/upload', uploadController)
app.use('/user', userController)
app.use('/comment', commentController)

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server has been started"));