const {getAllDeclaration} = require('../../db/DeclarationGateway');

async function fetchAllDeclarations(req, res) {
    const result = await getAllDeclaration();
    res.json({ result });
}

module.exports = {fetchAllDeclarations}