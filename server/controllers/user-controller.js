const {saveDeclaration} = require('../../db/DeclarationGateway');

async function saveDeclarationToDB(req, res) {
    const declaration = req.body;
    const result = await saveDeclaration(declaration);
    res.json({result});
}

module.exports = {saveDeclarationToDB}