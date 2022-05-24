const express = require('express');
const router = express.Router();
const {saveDeclarationToDB} = require('../controllers/user-controller');


router.post('/saveDeclaration',  saveDeclarationToDB);



module.exports = router;