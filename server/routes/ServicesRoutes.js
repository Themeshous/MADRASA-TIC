const {addService, getServices, deleteService} = require("../controllers/Service-controller");
const express = require("express");
const router = express.Router();


router.get('/' , getServices);
router.post('/', addService);
router.delete('/:service', deleteService);

module.exports = router;