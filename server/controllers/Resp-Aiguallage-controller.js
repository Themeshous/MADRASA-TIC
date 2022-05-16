const {getAllDeclaration, getDeclarationsOfTheEmail, getDeclarationById} = require('../../db/DeclarationGateway');

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

module.exports = {fetchAllDeclarations,fetchDeclarationsForEmail, fetchDeclarationById}