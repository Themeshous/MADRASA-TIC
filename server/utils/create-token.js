const jwt = require("jsonwebtoken");

const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

function createToken(user) {
    const token = createJWT(user)
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        isActive: user.isActive,
        token,
        requestSucceeded: true
    };
}

function createJWT(user) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const JWT_LIFETIME = process.env.JWT_LIFETIME;
    return jwt.sign(
        { userEmail: user.Email, nom: user.Nom, prenom: user.Prenom }, JWT_SECRET_KEY,
        { expiresIn: JWT_LIFETIME }
    )
}

function createUserViewForAdmin(user) {
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        Etat: user.isActive,
    };
}

module.exports = {createToken, createUserViewForAdmin}