const express = require('express');
const router = express.Router();
const {fetchAllDeclarations,fetchDeclarationsForEmail} = require('../controllers/Resp-Aiguallage-controller');


router.get('/consulterDeclartions', fetchAllDeclarations);
router.get('/userDeclarations', fetchDeclarationsForEmail);



module.exports = router;