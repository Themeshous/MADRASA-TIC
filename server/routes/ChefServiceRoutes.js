const express = require('express');
const router = express.Router();
const {saveRapport,upRapport,supRapport,fetchRapports} = require('../controllers/ChefService-controller');


router.post('/remplirRapport', saveRapport);
router.post('/sauvgRapport', saveRapport);
router.post('/majRapport', upRapport);
router.post('/suppRapport', supRapport);

router.get('/consulterRapports', fetchRapports);



module.exports = router;