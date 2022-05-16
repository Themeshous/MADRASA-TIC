const jwt = require('jsonwebtoken')

const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const {JWT_SECRET_KEY} = process.env;


const authenticateUserToken = async (request, response, next) => {
    const authHeader = getHeaderIfValid(request, response);
    const token = getTokenFromHeader(authHeader);
    try {
        const payload = jwt.verify(token, JWT_SECRET_KEY)
        request.user = {Email: payload.Email, Nom: payload.Nom, Prenom: payload.Prenom}
        next()
    } catch (error) {
        response.json({validAuthentication: false})
    }
}

    function getHeaderIfValid(request, response) {
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer'))
            response.json({validAuthentication: false})
        return authHeader;
    }

    function getTokenFromHeader(authHeader) { return authHeader.split(' ')[1]; }

module.exports = authenticateUserToken
