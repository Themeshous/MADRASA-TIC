const express = require('express');
const {signUp} = require('../controllers/authenticator');
const router = express.Router();


router.post('/',  signUp);



module.exports = router;