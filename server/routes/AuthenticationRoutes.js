const express = require('express');
const nodemailer = require('nodemailer');
const {login, signup, reset, forgetpassword} = require('../controllers/authenticator');
const router = express.Router();



router.post('/connect',  login);
router.post('/create', signup);
router.post('/reset', reset);
router.post('/forget', forgetpassword);



module.exports = router;