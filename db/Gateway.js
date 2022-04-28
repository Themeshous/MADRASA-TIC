const mysql = require('../server/node_modules/mysql2');
const bcrypt = require('../server/node_modules/bcryptjs');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'registration'
});

db.connect(function (err) {
  if (err) throw err;
  console.log("BDD Connected!");
});

// @ts-ignore
const connection = db.promise();

async function saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1) {
  const hashpswd = await bcrypt.hash(Password, 8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlinsert, [Nom, Prenom, Email, Role, Profession, hashpswd, Password1], (err, result) => {
    console.log(err);
  });
  console.log("user saved");
}

async function findUser(Email, Password) {
  const selectQuery = "SELECT * FROM users WHERE Email = ? AND Password1 = ?";
  const [[result]] = await connection.query(selectQuery, [Email, Password]);// destruct two time to get user object
  return result;
}

async function getAllUsers() {
  const query = "SELECT * FROM users";
  const [result] = await connection.query(query);
  return result;
}

async function setActiveUser(email, value) {
  const activationQuery = "UPDATE users SET isActive = ? WHERE Email = ?";
  db.query(activationQuery, [value, email], (err, result) => {
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
