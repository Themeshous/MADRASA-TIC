function createToken(user) {
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        isActive: user.isActive,
        requestSucceeded: true
    };
}

function createUserTokenForAdmin(user) {
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        Etat: user.isActive,
    };
}

module.exports = {createToken, createUserTokenForAdmin}