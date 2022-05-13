const {getAllDeclaration, getDeclarationsOfTheEmail} = require('../../db/DeclarationGateway');

async function fetchAllDeclarations(req, res) {
    const result = await getAllDeclaration();
    res.json({ result });
}

async function fetchDeclarationsForEmail(req, res) {
    const email = req.body.email;
    const result = await getDeclarationsOfTheEmail(email);
    res.json({ result });
}

module.exports = {fetchAllDeclarations,fetchDeclarationsForEmail}