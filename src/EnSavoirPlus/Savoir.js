import logoimg from "../img/SmallerLogo.png"
import "./EnSavoirPlus"
const Savoir = () => {

    return (
        <div className="propos">
            <h2>A-propos de la plateforme</h2>
            <div className="first">
                <img src={logoimg} />
                <span class="line" />
                <div className="context">
                    <h3>MADRASA-TIC</h3>
                    <p> MADRASA-TIC est une application web lancée en 2022 par la société BYTERS qui se représentent en tant qu'étudiants  
                        de l'Ecole Nationale supérieure d'Informatique 'ESI' afin d'implementer et apporter une nouvelle solution simple,
                        facile, flexible et visuelle pour aider le management des signales et la prise en compte des problèmes internes à l’ESI
                        afin d’améliorer leur cadre de vie à l'école. </p>
                    <br />
                    <p> L’Objectif de la plateforme et de permettre aux étudiants et aux usagers de l’école (enseignants, et fonctionnaires) de</p>
                    <p> signaler facilement un problème au niveau de l’école sans se soucier de l’autorité responsable de sa résolution. En </p>
                    <p> outre, cette plateforme permet aux services techniques de l’école, d’intervenir plus rapidement lorsqu’une anomalie est rencontrée au sein de l’école et de faire un suivi de la prise en charge du problème signalé.</p>
                </div>
            </div>

            <div className="second">
                <div className="line-title">
                    <span class="small_line" />
                    <h4 >Qu’est-ce que MADRASA-TIC fournit comme service</h4>
                </div>
                <div className="context">
                    <ul className="final-list">
                        <li>Gestion des comptes et des rôles , l'administrateur systéme est en charge de cette foncitonnalité .</li>
                        <li>Gestion d'aiguillage des signalement , un responsable se charge de filtrer d'une maniére générale les signalements des utilisateurs , soit ils seront validés ou rejetés .</li>
                        <li>Gestion des rapports , le chef de chaque service devra remplir un formulaire du rapport qui résume l'enchainement de réparation d'un probléme . </li>
                        <li>Gestion des annonces et évenements , le responsable des relations extérieures est en charge de programmer les évenements de l'école . </li>
                    </ul>
                </div>
            </div>
        </div>)
}
export default Savoir