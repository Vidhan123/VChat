const express = require('express');

const User = require('../controllers/user');

const userRouter = express.Router();
userRouter.use(express.json());

userRouter
  .route('/')
  .get((req, res) => {
    res.send('Home Page');
  })
  .post(User.postInfo);

userRouter
  .route('/chat')
  .get((req, res) => {
    res.send('Chat Page');
  });
  
userRouter
  .route('/userinfo')
  .post(User.getInfo);

module.exports = userRouter;
