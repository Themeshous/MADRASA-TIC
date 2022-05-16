const express = require('express');
const router = express.Router();
const {fetchAllDeclarations,fetchDeclarationsForEmail, fetchDeclarationById} = require('../controllers/Resp-Aiguallage-controller');


router.get('/consulterDeclartions', fetchAllDeclarations);
router.get('/userDeclarations', fetchDeclarationsForEmail);
router.get('/userDeclarations/:id', fetchDeclarationById);



module.exports = router;