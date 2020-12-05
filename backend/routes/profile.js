const express = require('express');
const profile = require('../controllers/update');

const profileRouter = express.Router();

profileRouter.post('/editprofile', profile.editProfile);

module.exports = profileRouter;
