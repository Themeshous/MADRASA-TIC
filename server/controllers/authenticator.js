//@ts-check
const { findUser } = require('../../db/Gateway');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);

    const data = await findUser(email, password);
    if (!data)
        res.json({requestSucceeded: false, message: "Email not found/or password incorrect" });
    else if (!data.isActive)
        res.json({requestSucceeded: false, message: "the user is disactivated by the admin" });
    else
        res.json(createToken(data));

}

function createToken(user) {
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        requestSucceeded: true
    };
}

module.exports = { login }