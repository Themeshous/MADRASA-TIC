const mysql = require('../server/node_modules/mysql2');
const path = require('path')

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const db = mysql.createConnection({
    user: "root",
    password: "123456789",
    database: "registration"
});

module.exports = connection;