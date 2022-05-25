const express = require('express');
const router = express.Router();
const {saveRapport,upRapport,supRapport,suppRapportarchive,fetchRapports,showRapport, showRapportservice, showRapportEtat,upEtatRapport,upRapportFile, fetchRapportsarchive} = require('../controllers/ChefService-controller');


router.post('/remplirRapport' , saveRapport);
router.post('/sauvgRapport', saveRapport);
router.post('/majRapport/:id', upRapport);
router.post('/suppRapport/:id', supRapport);

router.post('/suppRapportarchive/:id', suppRapportarchive);


router.post('/fichRapport',upRapportFile);

router.get('/consulterRapports', fetchRapports);
router.get('/consulterRapportsarchive', fetchRapportsarchive);
router.get('/consultRapport/:id', showRapport);
router.get('/consultRapportService/:service', showRapportservice);
router.get('/consultRapportEtat/:etat', showRapportEtat);

router.patch('/etatRapport/changer',upEtatRapport );



module.exports = router;