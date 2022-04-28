const express = require('express');
const {login, signup} = require('../controllers/authenticator');
const router = express.Router();


router.post('/Connect',  login);
router.post('/create', signup);



module.exports = router;