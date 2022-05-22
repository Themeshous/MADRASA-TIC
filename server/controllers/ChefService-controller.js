

const {setRapport,updateRapport,deleteRapport,getRapports, getRapportid, getRapportservice,getRapportEtat} = require('../../db/RapportGateway');

async function saveRapport(req, res) {
    const Date = req.body.date;   //champs obligatoire
    const Titre = req.body.titre; //champs obligatoire
    const Description = req.body.description;
    const Fichier = req.body.fichier;
    const Service = req.body.service; //champs obligatoire
    const Etat = req.body.etat;   

    
    const data = await setRapport(Date, Titre, Description, Fichier, Service,Etat);
    res.json({data});
}

async function upRapport(req, res) {
    const Titre = req.body.titre;
    const Description = req.body.description;
    const Fichier = req.body.fichier;
    const Service = req.body.service;
    const Etat = req.body.etat;

    const ID = req.params.id;
    
    const data = await updateRapport(Titre, Description, Fichier, Service,Etat,ID);
    res.json({data});
}

async function supRapport(req, res) {
    const ID = req.params.id;
       
    const data = await deleteRapport(ID);
    res.json({data});
}

async function fetchRapports(req, res) {
    const result = await getRapports();
    res.json({ result });
}

async function showRapportservice(req,res) {
    const Service =req.params.service;
    const result = await getRapportservice(Service);
    res.json({ result });
 
 }
 
async function showRapportEtat(req,res) {
    const State =req.params.etat;
    const result = await getRapportEtat(State);

    res.json({ result });
 
 }


async function showRapport(req,res) {
   const ID =req.params.id;
   const result = await getRapportid(ID);
   res.json({ result });

}




module.exports = {saveRapport,upRapport,supRapport,fetchRapports,showRapport,showRapportservice,showRapportEtat}
