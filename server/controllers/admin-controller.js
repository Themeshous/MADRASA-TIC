const {createUserViewForAdmin} =  require("../utils/create-token");

const {saveUser, getAllUsers, setActiveUser} = require('../../db/UserGateway');

async function createUser(request, response) {
    const Nom = request.body.nom;
    const Prenom = request.body.prenom;
    const Email = request.body.email;
    const Role = request.body.role;
    const Profession = request.body.profession;
    const Password = request.body.password;
    const Password1 = request.body.password1;

    const result = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
    response.json({result});
}

async function getAllUserTokens(req, res) {
    const result = await getAllUsers();
    const usersTable = hideSensitiveInformations(result);
    res.send({ usersTable });
}

    function hideSensitiveInformations(result) {
        return result.map(createUserViewForAdmin);
    }

async function activateOrDeactivateUser(request, response) {
    const email = request.body.email;
    const isActivated = request.body.isActive;
    await setActiveUser(email, isActivated? 1: 0);
    response.send("user stat changed");

}

module.exports = {createUser, getAllUserTokens, activateOrDeactivateUser}