const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const {createToken} =  require("../utils/create-token");

const { findUser, saveUser, setNewPassword} = require('../../db/Gateway');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const data = await findUser(email, password);
    console.log(data);
    if (!data.emailFound)
       return res.json({requestSucceeded: false, emailFound: false });
    if (!data.passwordFound)
       return res.json({requestSucceeded: false, emailFound: true, passwordIncorrect: true  });
    else
       return res.json(createToken(data));

}

async function signup(req, res) {
        const Nom = req.body.nom;
        const Prenom = req.body.prenom;
        const Email = req.body.email;
        const Role = req.body.role;
        const Profession = "req.body.profession";
        const Password = req.body.password;
        const Password1 = req.body.password;

        const data = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1);
        console.log(data);
        res.json({data});
}

async function reset(req, res) {

  console.log("here it is the data to update");
  console.log(req.body.email);
 // console.log(req.body);
  
  await setNewPassword(req.body.password1,req.body.email);
  return res.json({status: 'ok', message: 'Password reset. Please login with your new password.'});
}

async function forgetpassword(req,res){
    console.log("here it is the email who to reset his password");
    console.log(req.body.email);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_EMAIL_PASS,
      },
    });
    
    var mailOptions = {
      from: 'adminesi@gmail.com',
      to: "a.saidoune@esi-sba.dz",//req.body.email
      subject: 'The subject goes here',
      text: 'To reset your password, please click the link below.\n\nhttp://localhost:3000/auth/reset',
      html: 'The body of the email goes here in HTML',
    }
      
    
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.json(err);
      } else {
        res.json(info);
      }
    });
    
}

module.exports = { login,signup,reset,forgetpassword}