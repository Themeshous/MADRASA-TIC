const express = require('express');
const {createUser, getAllUserTokens, activateOrDeactivateUser} = require('../controllers/admin-controller');
const router = express.Router();


router.post('/create',  createUser);
router.get('/ConsulterComptes', getAllUserTokens);
router.patch('/changeUserStat', activateOrDeactivateUser);



module.exports = router;