const express = require('express');
const router = express.Router();
const {fetchAllDeclarations,fetchDeclarationsForEmail, fetchDeclarationById,updateDeclarationState} = require('../controllers/Resp-Aiguallage-controller');


router.get('/consulterDeclartions', fetchAllDeclarations);
router.get('/userDeclarations', fetchDeclarationsForEmail);
router.get('/userDeclarations/:id', fetchDeclarationById);
router.patch('/userDeclarations/changeState', updateDeclarationState);



module.exports = router;