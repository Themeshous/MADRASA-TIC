const express = require('express');
const {login, signup, reset, forgetpassword,updparmUser} = require('../controllers/authenticator');
const router = express.Router();



router.post('/connect', login);
router.post('/create', signup);
router.post('/reset', reset);
router.post('/forget', forgetpassword);
router.post('/updateUser/:Nom', updparmUser);




module.exports = router;