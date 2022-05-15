const express = require('express');
const router = express.Router();
const {saveAnnounce,upAnnounce,supAnnounce, fetchAnnounce,showAnnounce} = require('../controllers/RespoEvent-controller');


router.post('/remplirAnnounce', saveAnnounce);
router.post('/majAnnounce/:id', upAnnounce);
router.post('/sauvgAnnounce', saveAnnounce);
router.post('/suppAnnounce/:id', supAnnounce);

router.get('/consulterAnnounce', fetchAnnounce);
router.get('/consultAnnounce/:id', showAnnounce);




module.exports = router;