const connection = require('./connection');

async function saveDeclaration(declaration) {
    const sqlinsert =
        "INSERT INTO `madrasatic`.`declarations` " +
        "(`date`, `titre`, `description`, `image`, `emetteur`, `localisation`, `etat`) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?);"

    const data =
        [declaration.date, declaration.titre, declaration.description,
            declaration.image, declaration.emetteur, declaration.localisation, declaration.etat]
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
    if (result.length !== 0) {
        return result;
    } else {
        return {declarationsFound: false}
    }
}

async function getDeclarationsOfTheEmail(email) {
    const selectQuery = "SELECT * FROM declarations WHERE emetteur = ?";
    const [result] = await connection.query(selectQuery, [email]);
    if (result.length !== 0)
        return result;
    else
        return {declarationsFound: false}
}


module.exports = {saveDeclaration, getAllDeclaration, getDeclarationsOfTheEmail}