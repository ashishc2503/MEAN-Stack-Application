const express = require('express');

const app = express();
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
app.use('/api/posts', (req, res, next) => {
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
