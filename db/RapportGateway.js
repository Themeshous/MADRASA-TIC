const connection = require('./connection');


async function setRapport(date,titre,description,fichier,service,etat) {

    const sqlinsert = "INSERT INTO rapports (date, titre, description, fichier, service, etat) VALUES (?,?,?,?,?,?)";

    const data = [date, titre, description, fichier, service,etat]
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
    if (result.length !== 0) {
        return result;
    } else {
        return {RapportsFound: false}
    }
}

async function getRapportid(ID) {
    const selectsql = "SELECT * FROM rapports WHERE id_rap = ?";
    const result = await connection.query(selectsql,[ID]);
   
    if (result.length !== 0) {
        return result;
    } else {
        return {RapportFound: false}
    }
}



module.exports = { setRapport , updateRapport, deleteRapport,getRapports,getRapportid};