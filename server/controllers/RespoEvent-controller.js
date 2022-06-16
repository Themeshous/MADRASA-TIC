const {setAnnounce,updateAnnounce, deleteAnnounce,getAnnounce,
       getAnnounceid,getAnnouncearchive,archiveAnnounce,Restoreannounce, updatefile, updateimg} = require('../../db/AnnounceGateway');
const path = require('path');



async function saveAnnounce(req, res) {
   
    const DATE = req.body.datepost ;
    const TITRE = req.body.titre ;
    const ORGA = req.body.organisateur ;
    const DESC = req.body.description ;
    const LINK = req.body.lien ;


    const data = await setAnnounce(DATE,TITRE,ORGA,DESC,LINK);
    console.log("announce saved");
    res.json({data});

    /*const announcefile = req.files.announceFile ;
    const announceimg = req.files.announceImage;

    const filepath = path.join(__dirname, `../../db/announce-uploads/${announcefile.name}`);
    const imgpath = path.join(__dirname, `../../db/announce-uploads/${announceimg.name}`);
     
    announcefile.mv(filepath);
    announceimg.mv(imgpath);
    
    const  pathfich = `/announce-uploads/${announcefile.name}`;
    const  pathpic = `/announce-uploads/${announceimg.name}`;*/
}

async function updateFiles(req,res){
    const id = req.params.id;


    if (req.files){
    //const file = req.files.announceFile ;
    const image = req.files;
    //const filepath = path.join(__dirname, `../../db/announce-uploads/${file.name}`);
    const imgpath = path.join(__dirname, `../../db/announce-uploads/${image.file.name}`);
    //file.mv(filepath);
    await image.file.mv(imgpath);
    //await updatefile(id,`/announce-uploads/${file.name}`);
    await updateimg(id,`${image.file.name}`);
   
    }else{
        await updateimg(id, 'Null');
    }
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