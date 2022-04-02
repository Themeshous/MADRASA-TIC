//@ts-check
const { findUser } = require('../../db/Gateway');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);

   const data =  await findUser(email, password);
   if (!data) {
    res.json({ msg: "Email not found/or password incorrect" });
    return;
   } else 
    res.json({ data });
}

module.exports = { login }