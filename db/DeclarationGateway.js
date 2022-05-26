const connection = require('./connection');

async function saveDeclaration(declaration) {
    const sqlinsert =
        "INSERT INTO `madrasatic`.`declarations` " +
        "(`date`, `titre`, `description`, `image_path`, `emetteur`, `localisation`, `type`, `etat`) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?);"

    const data =
        [declaration.date, declaration.titre, declaration.description,
            declaration.image, declaration.emetteur, declaration.localisation, declaration.type, declaration.etat]
    try {
        await connection.query(sqlinsert, data);
    } catch (error) {
        return {declarationSaved: false, message: error.sqlMessage};
    }
    console.log("declaration saved");
    return {declarationSaved: true};
}

async function getAllDeclaration() {
    const selectQuery = "SELECT * FROM declarations";
    const [result] = await connection.query(selectQuery);
    return result;
}

async function getDeclarationById(id) {
    const selectQuery = "SELECT * FROM declarations WHERE id_dec = ?";
    const [[result]] = await connection.query(selectQuery, [id]);
    if (result)
        return result;
    else
        return { declarationFound: false }
}

async function getNonRejectedDeclarationsByService(service) {
    const selectQuery = "SELECT * FROM declarations WHERE declarations.service = ?\n" +
        "                             AND\n" +
        "                               declarations.etat <> ?";
    const [result] = await connection.query(selectQuery, [service, "rejeter"]);
    return result;
}

async function getDeclarationsOfTheEmail(email) {
    const selectQuery = "SELECT * FROM declarations WHERE emetteur = ?";
    const [result] = await connection.query(selectQuery, [email]);
    if (result.length !== 0)
        return result;
    else
        return {declarationsFound: false}
}

async function changeDeclarationState(id, newState) {
    const updateQuery = "UPDATE declarations SET etat = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [newState, id]);
}

async function changeDeclarationService(id, service) {
    const updateQuery = "UPDATE declarations SET service = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [service, id]);
}

async function saveImagePathToDB(path, id) {
    const updateQuery = "UPDATE declarations SET image_path = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [path, id]);
}



module.exports = {saveDeclaration,
    getAllDeclaration, getDeclarationById, getDeclarationsOfTheEmail,
    changeDeclarationState, changeDeclarationService, saveImagePathToDB,
    getNonRejectedDeclarationsByService}
