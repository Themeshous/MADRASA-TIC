//@ts-check
const mysql = require('mysql');
const bcrypt = require('../server/node_modules/bcryptjs');
//const Account = require('../models/Account');
//require('dotenv').config();
const { MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } = process.env;



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Beginning database design solutions',
  database: 'registration'
});

db.connect(function (err) {
  if (err) throw err;
  console.log("BDD Connected!");
});

async function saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1) {
  const hashpswd = await bcrypt.hash(Password, 8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlinsert, [Nom, Prenom, Email, Role, Profession, hashpswd, Password1], (err, result) => {
    console.log(err);
  });
  console.log("user saved");
}

async function findUser(Email, Password) {
  let data;
  const selectQuery = "SELECT * FROM users WHERE Email = ? AND Password1 = ?";
  db.query(selectQuery, [Email, Password], (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
      }
      if ((result.length == 0) || (!bcrypt.compare(Password, result[0].Password1))) {
        // if user not found
        console.log("Email not found/or password incorrect");
      }
      else {
        // Cas parfait
        console.log('Welcome to your profile');
        data = result;
      }
    }
  )
  return data;
}

async function setActiveUser(email, value) {
  const activationQuery = "UPDATE users SET isActive = ? WHERE Email = ?";
  db.query(activationQuery, [value, email], (err, result) => {
    console.log(err);
  });
}

module.exports = { saveUser, findUser, setActiveUser};
