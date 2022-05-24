import "./Aide.css"
const Third = () => {

    return (
        <div className="CenterContent">
               <h2> Les Services </h2>           
                <div className="Content">
                    <h3> C'est quoi les services MADRASA-TIC? </h3>
                    <p> MADRASA-TIC représente une platforme de gestion des problèmes . elle dispose de quatre services selon </p>
                    <p> les roles des utilisateurs. Aprés qu'un utilisateur s'authentifie à MADRASA-TIC va être redirigé  </p>
                    <p> automatiquement vers son service.</p>
                </div>
                
                <div className="Content">
                    <h3> Service gestion des Comptes </h3>
                    <p> L'administrateur système est l'utilisateur qui gère les comptes dans notre application web , il peut créer un </p> 
                    <p> compte pour d'autres utilisateurs qui font partis de la platforme .</p>
                    <p> il peut désactiver des utilisateurs à la demande , de les activer et gérer leurs accés</p>
                </div>
                <div className="Content">
                    <h3> Service d'aiguillage </h3>
                    <p> Parmi les fonctionnalités les plus importantes de la platforme , la gestion d'aiguillage des déclarations </p>
                    <p> et signaux qui est faite par le responsable d'aiguillage. Elle consiste à valider les signaux et les orienter</p>
                    <p> vers le service concernée selon le type de la déclaration . </p>
                </div>
                <div className="Content">
                    <h3> Service des rapports </h3>
                    <p> Le chef de service est l'utilisateur qui prend en charge le traitement d'un signalement et crée un rapport </p>
                    <p> détaillé sur le déroulement de ce dernier et comment était résolu . </p>
                    <p> Quand le chef service valide son rapport , il sera renvoier vers le gestionnaire d'aiguillage . </p>
                </div>
                <div className="Content">
                    <h3> Service Annonces et évenements </h3>
                    <p> Le Responsable des relations extérieures ou RRE est l'utilisateur qui gère toutes les annonces et des évenements</p>
                    <p> qui s'affichent automatiquement dans une file d'actualité , il peut partager une annonce , la supprimer ou bien</p>
                    <p> la modifier en spécifiant par exemple la dates quand elle doit s'afficher. </p>
                    <p></p>
                </div>
            </div>
    )
};
export default Third;