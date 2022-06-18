const nodemailer = require('nodemailer');

const {createToken, cleanToken} =  require("../utils/create-token");

const { findUser, saveUser,getCode, setNewPassword,updateuser} = require('../../db/UserGateway');
require('sequelize');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const data = await findUser(email, password);
    console.log(data);
    if (!data.emailFound)
       return res.json({requestSucceeded: false, emailFound: false });
    if (!data.passwordFound)
       return res.json({requestSucceeded: false, emailFound: true, passwordIncorrect: true  });
   if (!data.isActive)
       return res.json({requestSucceeded: false,emailFound: true,passwordIncorrect: true,isActive:false});
    else
       return res.json(createToken(data));

}


async function logout() {
    cleanToken();
}

async function signup(req, res) {


        const Nom = req.body.nom;
        const Prenom = req.body.prenom;
        const Email = req.body.email;
        const Num = req.body.numero;
        const Role = req.body.role;
        const Profession = req.body.profession;
        const Password = req.body.password;
        const Password1 = req.body.password;

        const code = between(10000,99999)
        
        console.log(code);

        const data = await saveUser(Nom, Prenom, Email, Role, Profession, Password, Password1,Num,code);
        console.log(data);
        res.json({data});
        function between(min, max) {  
          return Math.floor(
            Math.random() * (max - min + 1) + min
          )
        }
}

async function reset(req, res) {

  console.log("here it is the data to update");
  console.log(req.body.email);
   
  await setNewPassword(req.body.password1,req.body.email);
  return res.json({status: 'ok', message: 'Password reset. Please login with your new password.'});
}

async function CodeMail(req,res){
  console.log("here it is the email pour verfier");
  console.log(req.body.email);

  const code = await getCode(req.body.email);
  console.log(code.CodeVer);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'esiuser22@gmail.com',
      pass: 'rootroot',
    }

  });
  
  var mailOptions = {
    from: 'esiuser22@gmail.com',
    to: req.body.email,
    subject: 'Verification code',
    text: 'To have access to your account please enter this code:'+code.CodeVer,
  }
    
  
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json(err);
    } else {
      res.json('Email sent successfully');
    }
  });
  
}

async function VerfiCode(req,res){

  const email = req.body.email;
  const codetape = req.body.code;

  console.log(email);
  console.log(codetape);

  const codedb = await getCode(email);
  console.log(codedb.CodeVer);

  if (codetape == codedb.CodeVer) {
    res.json({verfication : true  });
  } else {
    res.json({verfication : false  });
  }
}



async function forgetpassword(req,res){
    console.log("here it is the email who to reset his password");
    console.log(req.body.email);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'a.saidoune@esi-sba.dz',
        pass: 'sbajamais21',
      }

    });
    
    var mailOptions = {
      from: 'a.saidoune@esi-sba.dz',
      to: req.body.email,
      subject: 'Reset password',
      text: 'To reset your password, please click the link below.\n\nhttp://localhost:3000/auth/reset',
    }
      
    
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.json(err);
      } else {
        res.json('Email sent successfully');
      }
    });
    
}



async function updparmUser(req,res){
    const iduser= req.params.id;
    const user = req.body;
    console.log(req.body);    
    const data = await updateuser(user,iduser);
    res.json({data});


}

module.exports = { login,logout,CodeMail,signup,VerfiCode,reset,forgetpassword,updparmUser}