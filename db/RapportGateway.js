const connection = require('./connection');

 

async function setRapport(date,titre,description,service,etat,Iddecetrange) {

    const sqlinsert = "INSERT INTO rapports (date, titre, description, service, etat) VALUES (?,?,?,?,?)";

    const data = [date, titre, description, service,etat]
    try {
       const [{insertId: Idrapport}]= await connection.query(sqlinsert, data);
       //upfileRapport(Idrapport,path);
       ExchnageClef(Idrapport,Iddecetrange);
       return {idrap: Idrapport};
    } catch (error) {
        return {rapportSaved: false, message: error.sqlMessage};
    }
    function ExchnageClef(idrap,iddec){
        sqlinsert_rap = "UPDATE rapports SET IDdec = ? WHERE id_rap = ?";
        sqlinsert_dec = "UPDATE declarations SET IDrap = ? WHERE id_dec = ?";

        const datarap = [iddec,idrap];
        const datadec = [idrap,iddec];

        connection.query(sqlinsert_rap, datarap); 
        connection.query(sqlinsert_dec, datadec);         

    }
    console.log("rapport saved");
    
    return {rapportSaved: true};
    
}


async function updateRapport(titre,description,service,etat,ID) {

  const sqlupdate = "UPDATE rapports SET titre = ?,description = ? , service = ?, etat= ? WHERE id_rap = ? "; //id njibouh men front 
  const result = await connection.query(sqlupdate, [titre, description,service,etat,ID]);
  console.log("rapport updated");

}

async function deleteRapport(ID) {
    const delsql = "UPDATE rapports SET Supp = true WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport archived");
}

async function deleteRapportarchive(ID) {
    const delsql = "UPDATE rapports SET Suppint = true WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport deleted from archive");
}

async function RestoreRapport(ID) {
    const delsql = "UPDATE rapports SET Supp = false WHERE id_rap = ?"; //faut njibou id hada men fornt 
    const result = await connection.query(delsql, [ID]);
    console.log("rapport restore");
}

async function getRapports(Service) {
    const selectsql = "SELECT * FROM rapports WHERE service = ? AND Supp = false AND Suppint = false";
    const [result] = await connection.query(selectsql,[Service]);
    return result;
}

async function getRapportsarchive(Service) {
    const selectsql = "SELECT * FROM rapports WHERE service = ? AND Supp = true AND Suppint = false";
    const [result] = await connection.query(selectsql,[Service]);
    if (result)
        return result;
    else
        return result;
}

async function getRapportrespoagg(){
    const selectsql = "SELECT * FROM rapports ";
    const [result]= await connection.query(selectsql);
    if (result)
        return result;
    else
        return { RapportFound: false }

}

async function getRapportEtat(Etat){
    const selectsql = "SELECT * FROM rapports WHERE etat = ? AND Supp = false AND Suppint = false";
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

async function getPathfile(ID){
    const selectsql = "SELECT fich_path FROM rapports WHERE id_rap = ?";
    const [[result ]]=await connection.query(selectsql,[ID]);
    if (result)
        return result;
    else
        return { Pathexist: false }

}




module.exports = { setRapport,upfileRapport, updateRapport, deleteRapport,getRapports,
                   getRapportid,getRapportrespoagg,getRapportEtat,RestoreRapport,changeRapportEtat,
                   getRapportsarchive,getPathfile,deleteRapportarchive};