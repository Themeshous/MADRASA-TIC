const connection = require('./connection');
var path = require('path');
 

async function setRapport(date,titre,description,file,service,etat) {

    const sqlinsert = "INSERT INTO rapports (date, titre, description, fich_path, service, etat) VALUES (?,?,?,?,?,?)";

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

  const sqlupdate = "UPDATE rapports SET titre = ?,description = ? ,fich_path = ? , service = ?, etat= ? WHERE id_rap = ? "; //id njibouh men front 
  const result = await connection.query(sqlupdate, [titre, description,fichier,service,etat,ID]);
  console.log("rapport updated");

}

async function deleteRapport(ID) {
    const delsql = "UPDATE rapports SET Supp = true WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport deleted");
}

async function deleteRapportarchive(ID) {
    const delsql = "UPDATE rapports SET Suppint = true WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport deleted from archive");
}

async function getRapports() {
    const selectsql = "SELECT * FROM rapports WHERE Supp = false AND Suppint = false";
    const [result] = await connection.query(selectsql);
        return result;
}

async function getRapportsarchive() {
    const selectsql = "SELECT * FROM rapports WHERE Supp = true AND Suppint = false";
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

async function changeRapportEtat(id,etat){
    const sqlupdate = "UPDATE rapports SET etat = ? WHERE id_rap = ?"; 
    return await connection.query(sqlupdate, [etat, id]);

}

async function upfileRapport (id,path){
    const sqlupdate = "UPDATE rapports SET fich_path = ? WHERE id_rap = ?";
    const result = await connection.query(sqlupdate, [path, id]);
    console.log("file uploaded in db");

}



module.exports = { setRapport,upfileRapport, updateRapport, deleteRapport,getRapports,
                   getRapportid,getRapportservice,getRapportEtat,changeRapportEtat,getRapportsarchive,deleteRapportarchive};