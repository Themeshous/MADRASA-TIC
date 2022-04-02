const {db, saveUser } = require('../../db/Gateway');

async function createUser(req, res) {
    const Nom = req.body.nom;
    const Prenom = req.body.prenom;
    const Email = req.body.email;
    const Role = req.body.role;
    const Profession = req.body.profession;
    const Password = req.body.password;
    const Password1 = req.body.password1;

    await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
}

module.exports = {createUser}