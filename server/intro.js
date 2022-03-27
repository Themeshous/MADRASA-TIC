const express = require ('express');
const mysql = require('mysql');
//const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { hash } = require('bcryptjs');



var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'registration'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("BDD Connected!");
});

 app.post('/signup',async (req,res)=>{

  const Nom = req.body.nom;
  const Prenom = req.body.prenom;
  const Email = req.body.email;
  const Role = req.body.role;
  const Profession = req.body.profession;
  const Password = req.body.password;
  const Password1 = req.body.password1; 


  var hashpswd = await bcrypt.hash(Password,8);

  const sqlinsert = "INSERT INTO users (Nom, Prenom, Email, Role, Profession, Password, Password1) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlinsert,[Nom ,Prenom,Email,Role,Profession,hashpswd,Password1],(err,result)=>{
        console.log(err);
      }
    );
});

 app.post('/login', async (req,res) => {
  const Email = req.body.email;
  const Password = req.body.password;

  console.log(req.body);
  
  // VERIFIE LES CHAMPS 

  if (!Email ){
    return console.log("Email est vide");
  }
  if (!Password){
    return console.log("Mot de passe vide")   
  }


  db.query(
    "SELECT * FROM users WHERE Email = ? AND Password1 = ?", 
    [Email,Password],
    (err,result)=>{
      console.log(result);
      if(err){
      console.log(err);
      }
      if((result.length == 0) || (!bcrypt.compare(Password, result[0].Password1)) ){
      // if user not found
      console.log("Email not found/or password incorrect");
      }
      else{
      // Cas parfait
      console.log('Welcome to your profile');
      }  
    }
  )
});



app.listen(2000);
console.log("runing server 2000");

