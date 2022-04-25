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

function createUserTokenForAdmin(user) {
    return {
        nom: user.Nom,
        prenom: user.Prenom,
        email: user.Email,
        role: user.Role,
        profession: user.Profession,
        isActive: user.isActive,
    };
}

module.exports = {createToken, createUserTokenForAdmin}