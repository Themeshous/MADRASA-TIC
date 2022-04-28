const mysql = require('../server/node_modules/mysql2');
const bcrypt = require('../server/node_modules/bcryptjs');

const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
})
const {MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER} = process.env;
const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB
});

db.connect(function (err) {
  if (err) throw err;
  console.log("BDD Connected!");
});

const connection = db.promise();

async function saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1) {
  const hashpswd = await bcrypt.hash(Password, 8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1) VALUES (?,?,?,?,?,?,?)";
  try {
    await connection.query(sqlinsert, [Nom, Prenom, Email, Role, Profession, hashpswd, Password1], (err) => {
      if (err) console.log(err);
    });
  } catch(error) {
      return {userSaved: false, message: error.sqlMessage };
  }
  console.log("user saved");
  return {userSaved: true};
}

async function findUser(Email, Password) {
  const selectEmailQuery = "SELECT * FROM users WHERE Email = ?";
  const [[result]] = await connection.query(selectEmailQuery, [Email]);// destruct two time to get user object
  if (result) {
    const selectUserQuery = "SELECT * FROM users WHERE Email = ?  AND Password1=? ";
    const [[result]] = await connection.query(selectUserQuery, [Email, Password]);
    if (result)
      return {...result, emailFound: true, passwordFound: true};
    else
      return {emailFound: true, passwordFound: false};
  } else {
    return {emailFound: false}
  }
}

async function getAllUsers() {
  const query = "SELECT * FROM users";
  const [result] = await connection.query(query);
  return result;
}

async function setActiveUser(email, value) {
  const activationQuery = "UPDATE users SET isActive = ? WHERE Email = ?";
  db.query(activationQuery, [value, email], (err) => {
    console.log(err);
  });
}

async function Newpassword(password, email) {
  const sqlupdate = "UPDATE users SET Password1 = ? WHERE Email = ?";
  db.query(sqlupdate, [password, email], (err, result) => {
    console.log(err);
  });
}

module.exports = { saveUser, findUser, setActiveUser, getAllUsers,Newpassword};
