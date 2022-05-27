const mysql = require('../server/node_modules/mysql2'); 
const path = require('path') 
 
require('dotenv').config({ 
    path: path.resolve(__dirname, '../.env') 
}) 
const {MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER} = process.env; 
 
const db = mysql.createConnection({ 
    host:MYSQL_HOST,
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,
    database:MYSQL_DB
}); 
 
db.connect(function (err) { 
    if (err) throw err; 
    console.log("BDD Connected!"); 
}); 
 
 const connection = db.promise(); 
 
module.exports = connection;
