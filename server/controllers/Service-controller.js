const Gateway = require('../../db/ServicesGateway');

async function getServices(req, res) {
    const services = await Gateway.getServicesList();
    res.json(services);
}

async function addService(req, res) {
    const newService = req.body.service;
    await Gateway.addService(newService);
    res.json("service added");
}

async function deleteService(req, res) {
    const service = req.body.service;
    await Gateway.deleteService(service);
    res.json("service deleted");
}

module.exports = {getServices, addService, deleteService};





