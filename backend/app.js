const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require("./routes/posts");
const app = express();

mongoose.connect("mongodb+srv://Ashish:FKRPLqjYIv3N28f8@cluster0-iktvr.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(() => {
    console.log('Connection Failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use("/api/posts", postRoutes);
//FKRPLqjYIv3N28f8
module.exports = app;
