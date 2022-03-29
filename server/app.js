const express = require('express');
const { db, saveUser } = require('../db/Gateway');
//const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { hash } = require('bcryptjs');

const authenticationRoutes = require('./routes/authenticationRoute')

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.use('/signup', authenticationRoutes);

////////////////////////

app.post('/login', async (req, res) => {
  const Email = req.body.email;
  const Password = req.body.password;

  console.log(req.body);

  // VERIFIE LES CHAMPS 

  if (!Email) {
    return console.log("Email est vide");
  }
  if (!Password) {
    return console.log("Mot de passe vide")
  }


  db.query(
    "SELECT * FROM users WHERE Email = ? AND Password1 = ?",
    [Email, Password],
    (err, result) => {
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
      }
    }
  )
});



app.listen(2000);
console.log("runing server 2000");

