const bcrypt = require('../server/node_modules/bcryptjs');
const connection = require('./connection');

async function saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1, Numero) {
  const hashpswd = await bcrypt.hash(Password, 8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1, NumTel) VALUES (?,?,?,?,?,?,?,?)";
  try {
    await connection.query(sqlinsert, [Nom, Prenom, Email, Role, Profession, hashpswd, Password1,Numero], (err) => {
      if (err) console.log(err);
    });
  } catch(error) {
      return {userSaved: false, message: error.sqlMessage };
  }
  console.log("user saved");
  return {userSaved: true};
}

async function findUser(Email, Password) {
  const result = await searchUserEmailInDB();
  if (result)
    return await handlePasswordVirification();
  else
    return {emailFound: false}

  async function searchUserEmailInDB() {
    const selectEmailQuery = "SELECT * FROM users WHERE Email = ?";
    const [[result]] = await connection.query(selectEmailQuery, [Email]);// destruct two time to get user object
    return result;
  }

  async function handlePasswordVirification() {
    const result = await varifyThatPasswordMatch();
    if (result)
      return {...result, emailFound: true, passwordFound: true};
    else
      return {emailFound: true, passwordFound: false};
  }

  async function varifyThatPasswordMatch() {
    const selectUserQuery = "SELECT * FROM users WHERE Email = ?  AND Password1=? ";
    const [[result]] = await connection.query(selectUserQuery, [Email, Password]);
    return result;
  }
}

async function getAllUsers() {
  const query = "SELECT * FROM users";
  const [result] = await connection.query(query);
  return result;
}

async function setActiveUser(email, value) {
  const activationQuery = "UPDATE users SET isActive = ? WHERE Email = ?";
  await connection.query(activationQuery, [value, email]);
  console.log("user state changed");
}

async function setNewPassword(password, email) {
  const sqlupdate = "UPDATE users SET Password1 = ? WHERE Email = ?";
  const result = await connection.query(sqlupdate, [password, email]);
  console.log(result);
}

async function updateuser(User,Id){
  const hashpswd = await bcrypt.hash(User.Password, 8);
  const sqlupdate = "UPDATE users SET Email=? ,Profession = ?, Password =? ,Password1 = ? ,NumTel = ? WHERE id_user = ?";
  const data = [User.Email, User.Profession, hashpswd, User.Password, Id ]
  try {
    await connection.query(sqlupdate, data); 
  } catch (error) {
    return {Userupdate: false, message: error.sqlMessage};
  }
  console.log("User updated");
  return {Usereupdate: true};

}

module.exports = { saveUser, findUser, setActiveUser, getAllUsers, setNewPassword,updateuser};
