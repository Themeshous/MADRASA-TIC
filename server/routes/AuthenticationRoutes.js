const express = require('express');
const {login, signup, reset, forgetpassword,updparmUser, CodeMail, VerfiCode} = require('../controllers/authenticator');
const router = express.Router();


router.post('/connect', login);
router.post('/create', signup);
router.post('/reset', reset);
router.post('/forget', forgetpassword);
router.post('/codesend', CodeMail);
router.post('/verfi', VerfiCode);
router.post('/updateUser/:id', updparmUser);




module.exports = router;