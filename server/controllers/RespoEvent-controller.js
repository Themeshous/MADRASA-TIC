const {setAnnounce,updateAnnounce, deleteAnnounce,getAnnounce,getAnnounceid} = require('../../db/AnnounceGateway');

async function saveAnnounce(req, res) {
  
    const Announce = req.body;    
    const data = await setAnnounce(Announce);
    res.json({data});
}

async function upAnnounce(req, res) {
    const ID = req.params.id;
    const Announce = req.body;    
    const data = await updateAnnounce(Announce,ID);
    res.json({data});
}

async function supAnnounce(req, res) {
    const ID = req.params.id;
       
    const data = await deleteAnnounce(ID);
    res.json({data});
}

async function fetchAnnounce(req, res) {
    const result = await getAnnounce();
    res.json({ result });
}


async function showAnnounce(req,res) {
    const ID =req.params.id;
    const result = await getAnnounceid(ID);
    res.json({ result });
 
 }









module.exports = {saveAnnounce,upAnnounce,supAnnounce,fetchAnnounce,showAnnounce}