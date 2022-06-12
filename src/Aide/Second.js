import "./Aide.css"
const Second = () => {

    return (
        <div className="CenterContent">
            <h2> Première utilisation </h2>
                <div className="Content">
                    <h3> C'est quoi MADRASA-TIC? </h3>
                    <p> MADRASA-TIC représente une plateforme de gestion des signaux , ce systeme est bien déstiné précisement 
                     à l'administration de l'ESI. Notre plateforme doit permettre le signalement des anomalies sur le plan de l'école
                         ESI-SBA et la prise en compte de cette dernière par l'administration. </p>
                    <br />
                    <p> Le signal peut être effectué par tout étudiant et usager de l'école (enseignant, et fonctionnaire). En outre,
                    l'application permet l'intervention rapide des autorités responsables lorsqu'une anomalie est rencontrée au sein de 
                    l'école et de faire un suivi de la prise en charge du problème signalé.</p>
                </div>
                <div className="Content">
                    <h3> Comment se connecter? </h3>
                    <p> La première utilisation nécessite une authentification via un mail de la forme (x.exmp@esi-sba.dz) et un mot 
                    de passe ,cette authentifcation nécissite tout d'abord la création d'un compte par l'administrateur ou il 
                    va spécifier le nom , l'email , le role ,.....</p>
                    <br />
                    <p> L'utilisateur n'a qu'à aller dans la page d'acceuil, cliquer sur le bouton "se connecter" ensuite introduire son mail
                   et le mot de passe .</p>
                </div>
                <div className="Content">
                    <h3> Comment se déconnecter?</h3>
                    <p> Si l'utilisateur désire se déconnecter de sa session , il doit cliquer sur le profil qui se trouve sur l'entete </p>
                    <p> de la page à droite puis il choisit se déconnecter . </p>
                </div>
            </div>
    )
};
export default Second;