import "./Aide.css"
const Third = () => {

    return (
        <div className="CenterContent">
               <h2> Les Services </h2>           
                <div className="Content">
                    <h3> Quels sont les  services qu'offre MADRASA-TIC? </h3>
                    <p> MADRASA-TIC offre quatre services selon
                    les roles des utilisateurs. Après qu'un utilisateur s'authentifie à MADRASA-TIC, il va être redirigé 
                    automatiquement vers la plateforme  de service correspondant à son role .</p>
                </div>
                
                <div className="Content">
                    <h3> Service gestion des Comptes </h3>
                    <p> L'administrateur système est l'utilisateur qui gère les comptes dans notre application web , il peut créer un  
                     compte pour d'autres utilisateurs qui font partis de la plateforme .
                     il peut désactiver des comptes utilisateurs à la demande , de les activer et gérer leurs accès à la plateforme</p>
                </div>
                <div className="Content">
                    <h3> Service d'aiguillage des déclarations </h3>
                    <p> Parmi les fonctionnalités les plus importantes de la plateforme , la gestion des déclarations
                    et signaux qui est faite par le responsable d'aiguillage. Elle consiste à valider les signaux et les orienter
                    vers le service concernée selon le type de la déclaration . </p>
                </div>
                <div className="Content">
                    <h3> Service de gestion des  rapports </h3>
                    <p> Le chef de service est l'utilisateur qui prend en charge le traitement d'un signalement et crée un rapport 
                    détaillé sur le déroulement de ce dernier et comment le problème a était résolu . </p>
                    <p> Quand le chef service crée et remplis son rapport , il a le droit de l'enregistrer,l'envoyer vers le gestionnaire d'aiguillage ou l'archiver. </p>
                </div>
                <div className="Content">
                    <h3> Service Annonces et évenements </h3>
                    <p> Le Responsable des relations extérieures ou RRE est l'utilisateur qui gère toutes les annonces et les évenements
  qui s'affichent automatiquement dans une file d'actualité pour les utilisateurs simples , il peut partager une annonce , la supprimer ou bien
                    la modifier en spécifiant par exemple la dates quand elle doit s'afficher. </p>
                    <p></p>
                </div>
            </div>
    )
};
export default Third;