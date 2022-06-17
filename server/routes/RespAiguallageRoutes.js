const express = require('express');
const router = express.Router();
const {fetchAllDeclarations, updateDeclarationPriority,
    fetchDeclarationsForEmail, fetchDeclarationById,updateDeclarationState,
    uplaodDeclarationImage, getDeclarationImage, fetchDeclarationsByService} = require('../controllers/Resp-Aiguallage-controller');


router.get('/consulterDeclartions', fetchAllDeclarations);
router.get('/userDeclarations', fetchDeclarationsForEmail);
router.get('/userDeclarations/getImage',getDeclarationImage);
router.get('/userDeclarations/:id', fetchDeclarationById);
router.get('/consulterDeclarations/:service', fetchDeclarationsByService);

router.patch('/userDeclarations/changeState', updateDeclarationState);
router.patch('/userDeclarations/changepriority', updateDeclarationPriority);

router.post('/userDeclarations/uplaodImage/:id',uplaodDeclarationImage);




module.exports = router;