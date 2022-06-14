const express = require('express');
const router = express.Router();
const {saveAnnounce,upAnnounce,supAnnounce, fetchAnnounce,showAnnounce,archAnnounce,RestoreArchive, fetchAnnounceArchive, updateFiles} = require('../controllers/RespoEvent-controller');


router.post('/remplirAnnounce', saveAnnounce);
router.post('/majAnnounce/:id', upAnnounce);

router.post('/majAnnouncefiles/:id', updateFiles);

router.post('/sauvgAnnounce', saveAnnounce);

router.post('/suppAnnounce/:id', supAnnounce);
router.post('/archiveAnnounce/:id', archAnnounce);
router.post('/restorerannounce/:id', RestoreArchive);

router.get('/consulterArchiveAnnounce', fetchAnnounceArchive);

router.get('/consulterAnnounce', fetchAnnounce);

router.get('/consultAnnounce/:id', showAnnounce);




module.exports = router;