const {saveDeclaration, getAllDeclaration} = require('../../db/DeclarationGateway');

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

module.exports = {saveDeclarationToDB, fetchAllNonRejetedDeclarations}