const {saveDeclaration} = require('../../db/DeclarationGateway');

async function saveDeclarationToDB(req, res) {
    const declaration = req.body;
    console.log(declaration);
    const result = await saveDeclaration(declaration);
    res.json({...result});
}

module.exports = {saveDeclarationToDB}