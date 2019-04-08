const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

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
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

//FKRPLqjYIv3N28f8

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Success"
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'abcde123',
      title: 'First server-side post',
      content: 'Via Server'
    },
    {
      id: 'fsbwva123',
      title: 'Second server-side post',
      content: 'Via Server'
    }
  ];
  res.status(200).json({
    message: 'Posts received!',
    posts: posts
  });
});
module.exports = app;
