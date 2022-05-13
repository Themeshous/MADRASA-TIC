const express = require('express');
const router = express.Router();
const {saveAnnounce,upAnnounce,supAnnounce, fetchAnnounce} = require('../controllers/RespoEvent-controller');


router.post('/remplirAnnounce', saveAnnounce);
router.post('/majAnnounce', upAnnounce);
router.post('/sauvgAnnounce', saveAnnounce);
router.post('/suppAnnounce', supAnnounce);

router.get('/consulterAnnounce', fetchAnnounce);




module.exports = router;