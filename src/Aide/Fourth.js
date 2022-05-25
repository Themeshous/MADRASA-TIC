import "./Aide.css"
const Fourth = () => {

    return (
        <div className="CenterContent">
            <h2> Compte et Notifications </h2>
            <div className="Content">
                <h3> Profile </h3>
                <p> Chaque utilisateur peut visualiser les informations de son compte aprés son authentifcation (nom ,</p>
                <p> prénom , mail , role ....) , tout simplement en appuyant sur son profile</p>
            </div>
            <div className="Content">
                <h3> Sécurité </h3>
                <p> L'utilisateur peut changer son mot de passe en tappant l'ancien mot de passer puis introduire un </p>
                <p> nouveau , il doit aller à son profile s'il désire le changer</p>
            </div>
            <div className="Content">
                <h3> Notifications </h3>
                <p> Lorsque un utilisateur dépose un nouveau signalement , le responsable d'aiguillage sera notifié par ce</p>
                <p> dernier. </p>
                <br />
                <p> Lorsque le responsable d'aiguillage valide la déclaration elle sera transmis vers le chef service , ce </p>
                <p> dernier recoit une notification qu'il prend en charge ce signalement et de le traiter le plus tôt possible .</p>
                <br />
                <p> Lorsque le problème est résolu le chef service crée le rapport et l'envoyer, le responsable d'aiguillage </p>
                <p> recoit une notification sur le rapport . </p>
                <p> Si un utilisateur veut consulter ses notifications , il peut cliquer sur l'icone de notifications .</p>

            </div>
        </div>
    )
};
export default Fourth;