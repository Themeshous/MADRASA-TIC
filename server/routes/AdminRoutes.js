const express = require('express');
const {createUser, getAllUserTokens} = require('../controllers/admin-controller');
const router = express.Router();


router.post('/create',  createUser);
router.get('/ConsulterComptes', getAllUserTokens);



module.exports = router;