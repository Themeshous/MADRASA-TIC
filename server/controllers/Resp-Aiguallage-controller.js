const {
    getAllDeclaration,
    getDeclarationsOfTheEmail,
    getDeclarationById, changeDeclarationState, changeDeclarationService,
    saveImagePathToDB, getNonRejectedDeclarationsByService
} = require('../../db/DeclarationGateway');

const path = require('path');

async function fetchAllDeclarations(req, res) {
    const declarations = await getAllDeclaration();
    res.json(declarations);
}

async function fetchDeclarationsForEmail(req, res) {
    const email = req.body.email;
    const declarations = await getDeclarationsOfTheEmail(email);
    res.json(declarations);
}

async function fetchDeclarationById(request, response) {
    const id = request.params.id;
    const declaration = await getDeclarationById(id);
    response.json(declaration);
}

async function fetchDeclarationsByService(request, response) {
    const service = request.params.service;
    const declarations = await getNonRejectedDeclarationsByService(service);
    response.json(declarations);
}

async function updateDeclarationState(request, response) {
    const {id, newState, newService, remarque} = request.body;
    if (newState === "rejeter")
        await changeDeclarationState(id, newState, remarque);

    if(newService)
        await changeDeclarationService(id, newService);

    response.send("declartion state has been changed");
}

async function uplaodDeclarationImage(request, response) {
    const declarationImage = request.files.image;
    const id = request.body.declarationID;
    if (!declarationImage.mimetype.startsWith('image'))
        response.send('Please Upload Image');

    const imagePath = path.join(__dirname, `../../db/declarations_images/${declarationImage.name}`);
    await declarationImage.mv(imagePath);
    await saveImagePathToDB(`/declarationsImages/${declarationImage.name}`, id);
    return response.send("image has been saved");

}

async function getDeclarationImage(request, response) {

}

module.exports = {
    fetchAllDeclarations, fetchDeclarationsForEmail, fetchDeclarationById,
    updateDeclarationState, uplaodDeclarationImage, getDeclarationImage,
    fetchDeclarationsByService
}