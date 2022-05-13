const mysql = require('../server/node_modules/mysql2');
const path = require('path')

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "registration"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("BDD Connected!");
});

const connection = db.promise();

module.exports = connection;