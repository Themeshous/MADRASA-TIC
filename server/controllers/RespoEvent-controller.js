const {setAnnounce,updateAnnounce, deleteAnnounce,getAnnounce} = require('../../db/AnnounceGateway');

async function saveAnnounce(req, res) {
  
    const Announce = req.body;    
    const data = await setAnnounce(Announce);
    res.json({data});
}

async function upAnnounce(req, res) {
  
    const Announce = req.body;    
    const data = await updateAnnounce(Announce);
    res.json({data});
}

async function supAnnounce(req, res) {
    const id_post = req.body.ID;
       
    const data = await deleteAnnounce(id_post);
    res.json({data});
}

async function fetchAnnounce(req, res) {
    const result = await getAnnounce();
    res.json({ result });
}










module.exports = {saveAnnounce,upAnnounce,supAnnounce,fetchAnnounce}