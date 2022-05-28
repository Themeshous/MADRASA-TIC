const express = require('express');
const router = express.Router();
const {saveDeclarationToDB, fetchAllNonRejetedDeclarations} = require('../controllers/user-controller');


router.post('/saveDeclaration',  saveDeclarationToDB);
router.get('/getDeclarations',  fetchAllNonRejetedDeclarations);




module.exports = router;