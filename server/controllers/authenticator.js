//@ts-check
const {createToken} =  require("../utils/create-token");
const { findUser, saveUser} = require('../../db/Gateway');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const data = await findUser(email, password);
    console.log(data);
    if (!data.emailFound)
        res.json({requestSucceeded: false, message: "Email not found" });
    else if (!data.passowrdFound)
        res.json({requestSucceeded: false, message: "Password incorrect" });
    else if (!data.isActive)
        res.json({requestSucceeded: false, message: "the user is dis-activated by the admin" });
    else
        res.json(createToken(data));

}

async function signup(req, res) {
        const Nom = req.body.nom;
        const Prenom = req.body.prenom;
        const Email = req.body.email;
        const Role = req.body.role;
        const Profession = req.body.profession;
        const Password = req.body.password;
        const Password1 = req.body.password;

        const data = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
        console.log(data);
        res.json({data});
}

module.exports = { login,signup }