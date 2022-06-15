const Gateway = require('../../db/CategorieGateway');

async function getCategories(req, res) {
    const services = await Gateway.getCategoriesList();
    res.json(services);
}

async function addCategory(req, res) {
    const newCategory = req.body.category;
    await Gateway.addCategory(newCategory);
    res.json("category added");
}

async function deleteCategory(req, res) {
    const category = req.body.category;
    await Gateway.deleteCategory(category);
    res.json("category deleted");
}

module.exports = {getCategories, addCategory, deleteCategory};





