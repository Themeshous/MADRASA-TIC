import "./Aide.css"
const Fourth = () => {

    return (
        <div className="CenterContent">
            <h2> Compte et Notifications </h2>
            <div className="Content">
                <h3> Profile </h3>
                <p> Chaque utilisateur peut visualiser les informations de son compte après son authentifcation (nom ,
                 prénom , email , role ....) , tout simplement en appuyant sur son le bouton mon compte qui se trouve dans le menu descendant de son profile sur l'entete.</p>
            </div>
            <div className="Content">
                <h3> Sécurité </h3>
                <p> L'utilisateur peut changer son mot de passe en tappant l'ancien mot de passer puis introduisant un
                 nouveau et le confirmer, pour cela il doit aller à son profile .</p>
            </div>
            <div className="Content">
                <h3> Notifications </h3>
                <p> Lorsque un utilisateur dépose une nouvelle déclaration, le responsable d'aiguillage sera notifié par ce
                 dernier. </p>
                <br />
                <p> Lorsque le responsable d'aiguillage valide la déclaration elle sera transmise vers le chef service , ce 
                 dernier recoit une notification indicant qu'il faut prendre en charge ce signalement et de le traiter le plus tôt possible .</p>
                <br />
                <p> Lorsque le problème est résolu le chef service crée un rapport et l'envoie au responsable d'aiguillage 
                aui va recevoir une notification sur ce rapport . </p>
                <p> Si un utilisateur veut consulter ses notifications , il peut cliquer sur l'icone de  ou sur  notification qui se trouve dans le menu gauche de sa plateforme .</p>

            </div>
        </div>
    )
};
export default Fourth;