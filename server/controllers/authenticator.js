//@ts-check
const {createToken} =  require("../utils/create-token");
const { findUser, saveUser} = require('../../db/Gateway');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const data = await findUser(email, password);
    console.log(data);
    if (!data)
        res.json({requestSucceeded: false, message: "Email not found/or password incorrect" });
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
        const Profession = "profession";
        const Password = req.body.password;
        const Password1 = "req.body.password1";

        await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
}

module.exports = { login,signup }