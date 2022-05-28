const {createUserViewForAdmin} =  require("../utils/create-token");

const {saveUser, getAllUsers, setActiveUser} = require('../../db/UserGateway');

async function createUser(req, res) {
        const Nom = req.body.nom;
        const Prenom = req.body.prenom;
        const Email = req.body.email;
        const Num = req.body.numero;
        const Role = req.body.role;
        const Profession = req.body.profession;
        const Password = req.body.password;
        const Password1 = req.body.password;

        const data = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1, Num);
        console.log(data);
        res.json({data});
}

async function getAllUserTokens(req, res) {
    const result = await getAllUsers();
    const usersTable = hideSensitiveInformations(result);
    res.send({usersTable});
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