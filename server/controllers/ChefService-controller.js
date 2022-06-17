

const {setRapport,updateRapport,deleteRapport,deleteRapportarchive,getRapports,RestoreRapport, getRapportid,
    getRapportEtat,changeRapportEtat,upfileRapport,getPathfile,getRapportsarchive, getRapportrespoagg} = require('../../db/RapportGateway');

const path = require('path');
const FormData = require('form-data');
const fs = require("fs");


async function saveRapport(req, res) {

    const Date = req.body.date;   //champs obligatoire
    const Titre = req.body.titre; //champs obligatoire
    const Description = req.body.description;
    const Service = req.body.service; //champs obligatoire
    const Etat = req.body.etat;
    const sonDeclar = req.body.soniddec;
   
    
    const data = await setRapport(Date, Titre, Description, Service, Etat,sonDeclar);
    return res.send({data}); 
    
    
    
}

async function upRapport(req, res) {
    const Titre = req.body.titre;
    const Description = req.body.description;
    const Service = req.body.service;
    const Etat = req.body.etat;

    const ID = req.params.id;


    const data = await updateRapport(Titre, Description, Service, Etat, ID);
    res.json({data});
}

async function supRapport(req, res) {
    const ID = req.params.id;

    const data = await deleteRapport(ID);
    res.json({data});
}

async function suppRapportarchive(req, res) {
    const ID = req.params.id;

    const data = await deleteRapportarchive(ID);
    res.json({data});
}

async function fetchRapports(req, res) {
    const Service = req.params.service;
    const result = await getRapports(Service);
    res.json({ result });
}

async function fetchRapportsarchive(req, res) {
    const Service =req.params.service;
    const result = await getRapportsarchive(Service);
    res.json({ result });
}

async function showRapportotale(req,res) {
    const result = await getRapportrespoagg();
    res.json({ result });
 
 }

 async function RestoreArchive(req, res) {
    const ID = req.params.id;
    
    const data = await RestoreRapport(ID);
    res.json({data});
} 
 
async function showRapportEtat(req,res) {
    const State =req.params.etat;
    
    const result = await getRapportEtat(State);

    res.json({result});

}

async function showRapport(req, res) {
    const ID = req.params.id;
    const result = await getRapportid(ID);
    res.json({result});

}

async function upEtatRapport(req, res) {
    const {id, etat} = req.body;
    await changeRapportEtat(id, etat);
    res.send("Etat de rapport est modifie");
}

async function upRapportFile(req, res) {

    //const rapportFile = req.files;
    const id_rap = req.params.id;

    if (req.files){

        const rapportFile = req.files;
        const fichPath = path.join(__dirname, `../../db/rapports-uploads/${rapportFile.file.name}`);
        await rapportFile.file.mv(fichPath);

        await upfileRapport(id_rap, `${rapportFile.file.name}`);
        return res.send("fichier sauvegarder");

    } else {
        await upfileRapport(id_rap, 'Null');
        
    }

}

async function getrapportfile(req, res) {

    const idpath=req.body.ID;
    const test = "50";
    const path = await getPathfile(test);
    console.log(path.fich_path);
    
    const fich = fs.readFileSync(`..${path.fich_path}`);
    
    const formData = new FormData();
    formData.append('file',fich);
    res.json(formData);
    return {pathfile:`..${path.fich_path}` };
}


module.exports = {saveRapport,upRapport,supRapport,suppRapportarchive,fetchRapports,showRapport,
                  showRapportotale,showRapportEtat,getrapportfile,RestoreArchive,upEtatRapport,upRapportFile,fetchRapportsarchive}
