const connection = require('./connection');
var path = require('path');
 

async function setAnnounce(Announce,fich,pic) {

    const sqlinsert = "INSERT INTO announce (datepost, titre, organisateur, description, lien) VALUES (?,?,?,?,?)";
    
    const data = [Announce.datepost, Announce.titre, Announce.organisateur, Announce.description,Announce.lien]
    
    try {
       const [{insertId: Idannounce}]=  await connection.query(sqlinsert, data);

       updatefile(Idannounce,fich);
       updateimg(Idannounce,pic);

    } catch (error) {
        return {AnnounceSaved: false, message: error.sqlMessage};
    }
    console.log("Announcesaved");
    return {AnnounceSaved: true};
}

async function updatefile(id,path){
  const sqlupdate = "UPDATE announce SET fichier = ? WHERE id_post = ?";
  const result = await connection.query(sqlupdate, [path, id]);
  console.log("file uploaded in db");

}

async function updateimg(id,path){
  const sqlupdate = "UPDATE announce SET img = ? WHERE id_post = ?";
  const result = await connection.query(sqlupdate, [path, id]);
  console.log("image uploaded in db");

}

async function updateAnnounce(Announce,ID){
  
  const sqlupdate = "UPDATE announce SET datepost=? ,titre = ?, organisateur =? ,description = ? ,fichier = ? , img = ?, lien= ? WHERE id_post = ?";  //id njibouh men front 
  const data = [Announce.datepost, Announce.titre, Announce.organisateur, Announce.description, Announce.fichier, Announce.img,Announce.lien,ID ]
  try {
    await connection.query(sqlupdate, data); 
  } catch (error) {
    return {Announceupdate: false, message: error.sqlMessage};
  }
  console.log("Announce updated");
  return {Announceupdate: true};
  

}

async function deleteAnnounce(ID){

  const delsql = "UPDATE announce SET supp = true WHERE id_post = ? "; //id njibouh men front 
  try{
    await connection.query(delsql, [ID]);
  } catch (error){
      return {Announcedeleted: false, message: error.sqlMessage};
  }
  console.log("Announce deleted");
  return {Announcedeleted: true};
    
}

async function archiveAnnounce(ID){

  const delsql = "UPDATE announce SET archive = true WHERE id_post = ? "; //id njibouh men front 
  try{
    await connection.query(delsql, [ID]);
  } catch (error){
      return {Announcedeleted: false, message: error.sqlMessage};
  }
  console.log("Announce archived");
  return {Announcearchived: true};
    
}

async function Restoreannounce(ID) {
  const delsql = "UPDATE announce SET archive = false WHERE id_post = ?"; //faut njibou id hada men fornt 
  const result = await connection.query(delsql, [ID]);
  console.log("announce restore");
}

async function getAnnounce(){
    const selectsql = "SELECT * FROM announce WHERE archive = false AND supp = false";
    const [result] = await connection.query(selectsql);
    if (result.length !== 0) {
        return result;
    } else {
        return {AnnounceFound: false}
    }
    
}

async function getAnnouncearchive(){
  const selectsql = "SELECT * FROM announce WHERE archive = true AND supp = false";
  const [result] = await connection.query(selectsql);
  if (result.length !== 0) {
      return result;
  } else {
      return {AnnounceFound: false}
  }
  
}


async function getAnnounceid(ID) {
  const selectsql = "SELECT * FROM announce WHERE id_post = ?";
  const [[result]] = await connection.query(selectsql,[ID]);
  if (result)
        return result;
    else
        return { AnnounceFound: false }
    
}




module.exports = { setAnnounce ,updatefile, updateAnnounce, deleteAnnounce,
                  archiveAnnounce,Restoreannounce,getAnnounce,updateimg,getAnnouncearchive,getAnnounceid};