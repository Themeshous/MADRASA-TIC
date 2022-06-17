const Gateway = require('../../db/ServicesGateway');

async function getServices(req, res) {
    const services = await Gateway.getServicesList();
    res.json(services);
}

async function addService(req, res) {
    const newService = req.body.service;
    res.json(AddServiceAndEnableAssociatedHeadOfServiceAccount());

    function AddServiceAndEnableAssociatedHeadOfServiceAccount() {
        Gateway.addService(newService)
        return Gateway.enableHeadsOfServiceAccounts(newService);
    }
}

async function deleteService(req, res) {
    const service = req.params.service;
    res.json( await deleteServiceAndDesableAssociatedHeadOfServiceAccount() );

    function deleteServiceAndDesableAssociatedHeadOfServiceAccount() {
        Gateway.deleteService(service)
        return Gateway.disableHeadsOfServiceAccounts(service);
    }
}

module.exports = {getServices, addService, deleteService};





