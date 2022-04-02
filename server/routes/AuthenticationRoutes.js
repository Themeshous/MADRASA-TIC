const express = require('express');
const {login} = require('../controllers/authenticator');
const router = express.Router();


router.post('/Connect',  login);



module.exports = router;