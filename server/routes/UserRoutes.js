const express = require('express');
const router = express.Router();
const {saveDeclarationToDB, fetchAllNonRejetedDeclarations,
    fetchArchivedDeclarationsByEmail, modifyArchivedDeclaration} = require('../controllers/user-controller');


router.post('/saveDeclaration',  saveDeclarationToDB);
router.get('/getDeclarations',  fetchAllNonRejetedDeclarations);
router.post('/getDeclarations/archive', fetchArchivedDeclarationsByEmail);
router.patch('/modifyDeclaration', modifyArchivedDeclaration);




module.exports = router;