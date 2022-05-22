const connection = require('./connection');

async function setAnnounce(Announce) {

    const sqlinsert = "INSERT INTO announce (datepost, titre, organisateur, description, fichier, img, lien) VALUES (?,?,?,?,?,?,?)";
    /*date faut prendre la date du systeme a faire plus tard*/
    const data = [Announce.datepost, Announce.titre, Announce.organisateur, Announce.description, Announce.fichier, Announce.img,Announce.lien]
    try {
        await connection.query(sqlinsert, data);
    } catch (error) {
        return {AnnounceSaved: false, message: error.sqlMessage};
    }
    console.log("Announcesaved");
    return {AnnounceSaved: true};
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

  const delsql = "UPDATE announce SET etatpost= true WHERE id_post = ? "; //id njibouh men front 
  try{
    await connection.query(delsql, [ID]);
  } catch (error){
      return {Announcedeleted: false, message: error.sqlMessage};
  }
  console.log("Announce deleted");
  return {Announcedeleted: true};
    
}

async function getAnnounce(){
    const selectsql = "SELECT * FROM announce";
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




module.exports = { setAnnounce , updateAnnounce, deleteAnnounce,getAnnounce,getAnnounceid};