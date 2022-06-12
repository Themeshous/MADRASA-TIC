const express = require('express');
const router = express.Router();
const {saveDeclarationToDB, fetchAllNonRejetedDeclarations, fetchArchivedDeclarationsByEmail} = require('../controllers/user-controller');


router.post('/saveDeclaration',  saveDeclarationToDB);
router.get('/getDeclarations',  fetchAllNonRejetedDeclarations);
router.get('/getDeclarations/archive', fetchArchivedDeclarationsByEmail);




module.exports = router;