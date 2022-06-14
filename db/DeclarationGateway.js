const connection = require('./connection');
const fs = require("fs");
const FormData = require('form-data');
const path = require('path');

async function saveDeclaration(declaration) {
    const insert =
        "INSERT INTO `madrasatic`.`declarations` " +
        "(`date`, `titre`, `description`, `emetteur`, `localisation`, `type`, `etat`, `priority`) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?);"

    const data =
        [declaration.date, declaration.titre, declaration.description,
            declaration.emetteur, declaration.localisation, declaration.type,
            declaration.etat, declaration.priority]
    try {
        const [{insertId: declarationID}] = await connection.query(insert, data);
        saveImageFile(declaration.imageFile, declarationID);
    } catch (error) {
        return {declarationSaved: false, message: error.sqlMessage};
    }
    console.log("declaration saved");
    return {declarationSaved: true};

}

function saveImageFile(image, id) {
    if (!image) return;
    const declarationImage = image;
    if (!declarationImage.mimetype.startsWith('image'))
        return;

    const imageName = getImageName();
    const imagePath = path.join(__dirname, `./declarations_images/${imageName}.jpg`);
    declarationImage.mv(imagePath);
    saveImagePathToDB(`/${imageName}.jpg`, id);

    function getImageName() {
        const {v4: uuid} = require('uuid');
        return uuid();
    }
}


async function saveImagePathToDB(path, id) {
    const updateQuery = "UPDATE declarations SET image_path = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [path, id]);
}


function attachImageToDeclarationAndReturnIt(declaration) {
    if (declaration.image_path)
        declaration.imageFile = getDeclarationImage(declaration.image_path);
    delete declaration.image_path;
    return declaration;

    function getDeclarationImage(imagePath) {
        try {
            return constructImageFormData();
        } catch (error) {
            console.log(error);
        }

        function constructImageFormData() {
            const imagesFolderPath = path.resolve(__dirname, './declarations_images/');
            const imageFile = fs.readFileSync(imagesFolderPath + '/' + imagePath);
            const formData = new FormData();
            formData.append('image', imageFile);
            return formData.getBuffer();
        }
    }
}

async function getAllDeclaration() {
    const selectQuery = "SELECT * FROM declarations WHERE mobile_archived = 0";
    const [result] = await connection.query(selectQuery);
    result.forEach(attachImageToDeclarationAndReturnIt)
    return result;
}

async function getDeclarationById(id) {
    const selectQuery = "SELECT * FROM declarations WHERE id_dec = ?";
    const [[result]] = await connection.query(selectQuery, [id]);
    if (result)
        return attachImageToDeclarationAndReturnIt(result);
    else
        return {declarationFound: false}
}

async function getNonRejectedDeclarationsByService(service) {
    const selectQuery = "SELECT * FROM declarations WHERE declarations.service = ?\n" +
        "                             AND\n" +
        "                               declarations.etat <> ?";
    const [result] = await connection.query(selectQuery, [service, "rejeter"]);
    result.forEach(attachImageToDeclarationAndReturnIt)
    return result;
}

async function getDeclarationsOfTheEmail(email) {
    const selectQuery = "SELECT * FROM declarations WHERE emetteur = ?";
    const [result] = await connection.query(selectQuery, [email]);
    result.forEach(attachImageToDeclarationAndReturnIt)
    return result;
}

async function changeDeclarationState(id, newState, remarque) {
    let updateQuery
    if (remarque) {
        updateQuery = "UPDATE `madrasatic`.`declarations` SET `etat` = ?," +
            " `remarques_de_responsable` = ? WHERE (`id_dec` = ?);";
        return await connection.query(updateQuery, [newState, remarque, id]);
    } else {
        updateQuery = "UPDATE declarations SET etat = ? WHERE id_dec = ?";
        return await connection.query(updateQuery, [newState, id]);
    }
}

async function changeDeclarationService(id, service) {
    const updateQuery = "UPDATE declarations SET service = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [service, id]);
}

async function changeDeclarationPriority(id, priority) {
    const updateQuery = "UPDATE declarations SET priority = ? WHERE id_dec = ?";
    return await connection.query(updateQuery, [priority, id]);
}


async function modifyDeclaration(declaration) {
    const query = "UPDATE `madrasatic`.`declarations` " +
        "SET `date` = ?, `titre` = ?, `description` = ?, `localisation` = ?, " +
        "`etat` = ?, `service` = ?, `mobile_archived` = ? WHERE (`id_dec` = ?);"

    const data =
        [declaration.date, declaration.titre, declaration.description,
            declaration.localisation, declaration.etat, declaration.service,
            declaration.mobile_archived, declaration.id_dec];

    try {
        saveImageFile(declaration.imageFile, declaration.id_dec);
    } catch (error) {
        console.log(error);
    }

    return await connection.query(query, data);
}

module.exports = {
    saveDeclaration,
    getAllDeclaration, getDeclarationById, getDeclarationsOfTheEmail,
    changeDeclarationState, changeDeclarationService, saveImagePathToDB,
    getNonRejectedDeclarationsByService, modifyDeclaration, changeDeclarationPriority
}
