const Gateway = require('../../db/ServicesGateway');

async function getServices(req, res) {
    const services = await Gateway.getServicesList();
    res.json(services);
}

async function addService(req, res) {
    const newService = req.body.service;
    res.json(await Gateway.addService(newService));
}

async function deleteService(req, res) {
    const service = req.params.service;
    res.json(await Gateway.deleteService(service));
}

module.exports = {getServices, addService, deleteService};





