const {setAnnounce,updateAnnounce, deleteAnnounce,getAnnounce,
       getAnnounceid,getAnnouncearchive,archiveAnnounce,Restoreannounce, updatefile, updateimg} = require('../../db/AnnounceGateway');
const path = require('path');



async function saveAnnounce(req, res) {
   
    const Announce = req.body ;
    const announcefile = req.files.announceFile ;
    const announceimg = req.files.announceImage;

    const filepath = path.join(__dirname, `../../db/announce-uploads/${announcefile.name}`);
    const imgpath = path.join(__dirname, `../../db/announce-uploads/${announceimg.name}`);
     
    announcefile.mv(filepath);
    announceimg.mv(imgpath);
    
    const  pathfich = `/announce-uploads/${announcefile.name}`;
    const  pathpic = `/announce-uploads/${announceimg.name}`;

    const data = await setAnnounce(Announce,pathfich,pathpic);
    res.json({data});
}

async function updateFiles(req,res){
    const id = req.params.id;
    const file = req.files.announceFile ;
    const image = req.files.announceImage;

    const filepath = path.join(__dirname, `../../db/announce-uploads/${file.name}`);
    const imgpath = path.join(__dirname, `../../db/announce-uploads/${image.name}`);

    file.mv(filepath);
    image.mv(imgpath);

    await updatefile(id,`/announce-uploads/${file.name}`);
    await updateimg(id,`/announce-uploads/${image.name}`);
    console.log('files updated');
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

async function archAnnounce(req, res) {
    const ID = req.params.id;
       
    const data = await archiveAnnounce(ID);
    res.json({data});
}

async function RestoreArchive(req, res) {
    const ID = req.params.id;
    const data = await Restoreannounce(ID);
    res.json({data});
} 


async function fetchAnnounce(req, res) {
    const result = await getAnnounce();
    res.json({ result });
}

async function fetchAnnounceArchive(req, res) {
    const result = await getAnnouncearchive();
    res.json({ result });
}


async function showAnnounce(req,res) {
    const ID =req.params.id;
    const result = await getAnnounceid(ID);
    res.json({ result });
 
 }


module.exports = {saveAnnounce,updateFiles,archAnnounce,RestoreArchive,
    upAnnounce,fetchAnnounceArchive,supAnnounce,fetchAnnounce,showAnnounce}