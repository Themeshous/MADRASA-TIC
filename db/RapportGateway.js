const connection = require('./connection');
var path = require('path');
 

async function setRapport(date,titre,description,file,service,etat) {

    const sqlinsert = "INSERT INTO rapports (date, titre, description, fichier, service, etat) VALUES (?,?,?,?,?,?)";

    const data = [date, titre, description, file, service,etat]
    try {
        await connection.query(sqlinsert, data);
    } catch (error) {
        return {rapportSaved: false, message: error.sqlMessage};
    }
    console.log("rapport saved");
    return {rapportSaved: true};
}

async function updateRapport(titre,description,fichier,service,etat,ID) {

  const sqlupdate = "UPDATE rapports SET titre = ?,description = ? ,fichier = ? , service = ?, etat= ? WHERE id_rap = ? "; //id njibouh men front 
  const result = await connection.query(sqlupdate, [titre, description,fichier,service,etat,ID]);
  console.log("rapport updated");

}

async function deleteRapport(ID) {
    const delsql = "UPDATE rapports SET Supp = true WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport deleted");
}

async function getRapports() {
    const selectsql = "SELECT * FROM rapports";
    const [result] = await connection.query(selectsql);
        return result;
}

async function getRapportservice(Service){
    const selectsql = "SELECT * FROM rapports WHERE service = ?";
    const [result]= await connection.query(selectsql,[Service]);
    if (result)
        return result;
    else
        return { RapportFound: false }

}

async function getRapportEtat(Etat){
    const selectsql = "SELECT * FROM rapports WHERE etat = ?";
    const [result]= await connection.query(selectsql,[Etat]);
    if (result)
        return result;
    else
        return { RapportFound: false }

}

async function getRapportid(ID) {
    const selectsql = "SELECT * FROM rapports WHERE id_rap = ?";
    const [[result]]= await connection.query(selectsql,[ID]);
    if (result)
        return result;
    else
        return { RapportFound: false }
}



module.exports = { setRapport , updateRapport, deleteRapport,getRapports,getRapportid,getRapportservice,getRapportEtat};