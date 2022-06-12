const {saveDeclaration, getAllDeclaration,
    getDeclarationsOfTheEmail, modifyDeclaration} = require('../../db/DeclarationGateway');

async function saveDeclarationToDB(req, res) {
    const declaration = req.body;
    console.log(declaration);
    const result = await saveDeclaration(declaration);
    res.json({...result});
}

async function fetchAllNonRejetedDeclarations(req, res) {
    const declarations = await getAllDeclaration();
    res.json(declarations.filter((declaration) => {
        const rejectedState = "rejeter";
        return declaration.etat !== rejectedState;
    }));
}

async function fetchArchivedDeclarationsByEmail(req, res) {
    const email = req.body.email;
    const declarations = await getDeclarationsOfTheEmail(email);
    res.json(declarations.filter((declaration) => {
        const isArchived = 1;
        return declaration.mobile_archived === isArchived;
    }));
}

async function modifyArchivedDeclaration(request, response) {
    const modifiedDeclaration = request.body;
    await modifyDeclaration(modifiedDeclaration);
    response.json("declartion has been modified");
}

module.exports = {saveDeclarationToDB, fetchAllNonRejetedDeclarations, fetchArchivedDeclarationsByEmail
,modifyArchivedDeclaration}