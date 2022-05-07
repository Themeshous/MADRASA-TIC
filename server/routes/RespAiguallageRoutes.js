const express = require('express');
const router = express.Router();
const {fetchAllDeclarations} = require('../controllers/Resp-Aiguallage-controller');


router.get('/consulterDeclartions',  fetchAllDeclarations);


module.exports = router;