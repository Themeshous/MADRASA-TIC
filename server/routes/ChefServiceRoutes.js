const express = require('express');
const router = express.Router();
const {saveRapport,upRapport,supRapport,suppRapportarchive,fetchRapports,
    showRapport, showRapportotale, showRapportEtat,upEtatRapport,
    upRapportFile, fetchRapportsarchive,getrapportfile, RestoreArchive} = require('../controllers/ChefService-controller');


router.post('/remplirRapport' , saveRapport);

router.post('/sauvgRapport', saveRapport);
router.post('/majRapport/:id', upRapport);
router.post('/suppRapport/:id', supRapport);
router.post('/restorerRapport/:id', RestoreArchive);
router.post('/suppRapportarchive/:id', suppRapportarchive);

router.put('/fichRapport/:id',upRapportFile);

router.patch('/etatRapport/changer',upEtatRapport );

router.get('/getRapport', getrapportfile);

router.get('/consulterRapports/:service', fetchRapports);
router.get('/consulterRapportsarchive/:service', fetchRapportsarchive);
router.get('/consultRapportEtat/:etat', showRapportEtat);
router.get('/consultRapport/:id', showRapport);
router.get('/consultRapportRespoAgg', showRapportotale);




module.exports = router;