const connection = require('./connection');

async function getCategoriesList() {
    const query = "SELECT * FROM categorie_declaration";
    const [categories] = await connection.query(query);
    return categories;
}

async function addCategory(categorie) {
    const query = "INSERT INTO `madrasatic`.`categorie_declaration` (`categorie`, `service`)" +
        " VALUES (?, ?);";

    await connection.query(query, [categorie.categorie, categorie.service]);
    return "category saved";
}

async function deleteCategory(category) {
    const deleteQuery = "DELETE FROM `madrasatic`.`categorie_declaration` WHERE (`categorie` = '"+ category+ "');"

    await connection.query(deleteQuery);
    return "category deleted";
}

module.exports = {getCategoriesList, addCategory, deleteCategory };


