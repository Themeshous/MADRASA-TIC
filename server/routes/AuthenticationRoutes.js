const express = require('express');
const {login} = require('../controllers/authenticator');
const router = express.Router();


router.post('/connect',  login);



module.exports = router;