const express = require('express');
const router = express.Router();
const {saveRapport,upRapport,supRapport,fetchRapports,showRapport} = require('../controllers/ChefService-controller');


router.post('/remplirRapport', saveRapport);
router.post('/sauvgRapport', saveRapport);
router.post('/majRapport/:id', upRapport);
router.post('/suppRapport/:id', supRapport);

router.get('/consulterRapports', fetchRapports);
router.get('/consultRapport/:id', showRapport);



module.exports = router;