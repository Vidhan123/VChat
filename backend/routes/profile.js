const express = require('express');
const profile = require('../controllers/update');
const Chat = require('../controllers/chat');

const profileRouter = express.Router();

profileRouter.post('/editprofile', profile.editProfile);

profileRouter.post('/mediaMsg', Chat.mediaMsg);

module.exports = profileRouter;
