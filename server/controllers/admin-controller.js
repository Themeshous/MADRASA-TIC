const {createUserTokenForAdmin} =  require("../utils/create-token");

const {saveUser, getAllUsers, setActiveUser} = require('../../db/Gateway');

async function createUser(req) {
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;
    const Email = req.body.email;
    const Role = req.body.role;
    const Profession = req.body.profession;
    const Password = req.body.password;
    const Password1 = req.body.password1;

    await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
}

async function getAllUserTokens() {
    const result = await getAllUsers();
    return hideSensitiveInformations(result);
}

    function hideSensitiveInformations(result) {
        return result.map(createUserTokenForAdmin);
    }

async function activateOrDeactivateUser(request) {
    const email = request.body.email;
    const isActivated = request.body.isActive;
    await setActiveUser(email, isActivated? 1: 0);
}

module.exports = {createUser, getAllUserTokens, activateOrDeactivateUser}