const express = require('express');
const router = express.Router();
const {saveRapport,upRapport,supRapport,suppRapportarchive,fetchRapports,
    showRapport, showRapportotale, showRapportEtat,upEtatRapport,
    upRapportFile, fetchRapportsarchive, RestoreArchive} = require('../controllers/ChefService-controller');


router.post('/remplirRapport' , saveRapport);
router.post('/sauvgRapport', saveRapport);
router.post('/majRapport/:id', upRapport);
router.post('/suppRapport/:id', supRapport);
router.post('/restorerRapport/:id', RestoreArchive);
router.post('/suppRapportarchive/:id', suppRapportarchive);

router.post('/fichRapport',upRapportFile);

router.patch('/etatRapport/changer',upEtatRapport );


router.get('/consulterRapports/:service', fetchRapports);

router.get('/consulterRapportsarchive/:service', fetchRapportsarchive);

router.get('/consultRapportEtat/:etat/:service', showRapportEtat);

router.get('/consultRapport/:id', showRapport);

router.get('/consultRapportRespoAgg', showRapportotale);




module.exports = router;