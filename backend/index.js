const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookstore = require("./routes/bookRoute");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));

//app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, PUSH, GET, PATCH, DELETE");
  }
  next();
});

app.use("/books", bookstore);

mongoose
  .connect(
    `mongodb+srv://${process.env.UserName}:${process.env.pwd}@bookstore.7vldl.mongodb.net/?retryWrites=true&w=majority&appName=bookstore`
  )
  .then(() => {
    console.log("App connected to MongoDB Database");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
