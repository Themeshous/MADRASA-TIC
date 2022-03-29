const mysql = require('mysql');
const bcrypt = require('../server/node_modules/bcryptjs');
//const Account = require('../models/Account');
//require('dotenv').config();
const {MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER} = process.env;



const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Beginning database design solutions',
  database: 'registration'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("BDD Connected!");
});


async function getUser(userEmail) {
    const selectAccountQuery = `SELECT * FROM Account WHERE email = '${userEmail}';`;

  let [[result]] = await connection.query(selectAccountQuery);// destruct two time to get Account object
  if (result) {
    let {username, email, speciality, role, hashedPassword, isActive} = {...result}
    return new Account(username, email, speciality, role, hashedPassword, isActive);
  }
  return null;
}

async function saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1) {
  const hashpswd = await bcrypt.hash(Password, 8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlinsert, [Nom, Prenom, Email, Role, Profession, hashpswd, Password1], (err, result) => {
    console.log(err);
  });
}

async function saveAccount(newAccount) {
  let {username, email, speciality, role, hashedPassword} = newAccount
  const insertQuery = `INSERT INTO Account (Username, Email, speciality, Role,hashedPassword) VALUES ("${username}", "${email}", "${speciality}", "${role}", "${hashedPassword}");`
  return await connection.query(insertQuery);
}

async function updateAccount(email, attribute, newValue) {
  const updateQuery =`UPDATE Account SET ${attribute} = '${newValue}' WHERE Email = '${email}'`;
  return await connection.query(updateQuery);
}

async function setActiveAccount(email, value) {
  const activationQuery =`UPDATE Account SET isActive = ${value} WHERE Email = '${email}'`;
  return await connection.query(activationQuery);
}

function disconnect() {conn.end()}


//module.exports = {getUser, saveAccount, updateAccount, setActiveAccount, disconnect}

module.exports = {db, saveUser};
