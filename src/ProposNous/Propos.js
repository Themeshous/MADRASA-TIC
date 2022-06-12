import "./Propos.css"
import profile1 from "../img/alerting.jpg"
import Hidaya from "../img/Hidaya.jpg"
import Meriem from "../img/Meriem.jpg"
import Houssem from "../img/Houssem.jpg"
import Byters from "../img/Byters.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Propos = () => {

    return (
        <div className="propos">
            <h2> Propos de notre equipe </h2>
            <div className="first">
                <img src={Byters} />
                <span class="line" />
                <div className="context">
                    <h3>BYTERS</h3>
                    <p> BYTERS est une entreprise innovante spécialisée dans la conception et le développement des logiciels sur les différentes plateformes (Desktop,Web,Mobile), créée en 2022 a Sidi Bel Abbés. </p>
                    <br />
                    <p> Notre boîte de développement réalise des services de qualité grâce a son professionnalisme et sa connaissance des différentes technologies et outils de développement, et cela dans des délais
                        spécifiés . Notre société vous apporte des solutions informatiques qui répondent aux exigences des clients.</p>
                    <br />
                </div>
            </div>
            <div className="line-title">
                <span class="small_line" />
                <h4 >Notre equipe</h4>
                <p> (Constituée de 5 membres)</p>
            </div>
            <div class="sub-container">
                <div class="teams">
                    <img src={Hidaya} className="ProfileImg" />
                    <div class="name"> Bouchouka Hidaya </div>
                    <div class="desig">Chef d'équipe/Mobile Developer</div>

                    <div class="about">Etudiante en 3 ème année à l'école nationale supérieure d'informatique ESI-SBA</div>

                    <div class="social-links">
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={profile1} className="ProfileImg" />
                    <div class="name"> Mouro Chiheb Eddine </div>
                    <div class="desig"> Frontend Developer</div>
                    <div class="about">Etudiant en 3 ème année à l'école nationale supérieure d'informatique ESI-SBA</div>

                    <div class="social-links">
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={profile1} className="ProfileImg" />
                    <div class="name"> AbdelmadjidChergui </div>
                    <div class="desig">Backend Developer</div>
                    <div class="about">Etudiant en 3 ème année à l'école nationale supérieure d'informatique ESI-SBA </div>
                    <div class="social-links">
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={Houssem} className="ProfileImg" />
                    <div class="name"> Achref Houssem Saidoune </div>
                    <div class="desig">Backend Developer</div>
                    <div class="about">Etudiant en 3 ème année à l'école nationale supérieure d'informatique ESI-SBA</div>
                    <div class="social-links">
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={Meriem} className="ProfileImg" />
                    <div class="name"> Meriem Khedir </div>
                    <div class="desig">Frontend Developer</div>
                    <div class="about">Etudiante en 3 ème année à l'école nationale supérieure d'informatique ESI-SBA</div>
                    <div class="social-links">
                        <a href="mailto:m.khedir@esi-sba.dz"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://www.linkedin.com/in/meriem-khedir-4803b6209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0qGQA4MYQFuMq8yjnwqTeA%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/meriem-khe"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </div>
            <div className="line-title">
                <span class="small_line" />
                <h4 >L'Histoire du projet</h4>
            </div>
            <div className="Context">
                <p> Chaque année l'Ecole Nationale supérieure d'Informatique lance la phase des projets , ces projets portent sur différent sujet , des équipes de 6 membres seront constituées,
                    chaque équipe est supposé choisir un sujet à développer et à la fin chaqu'une doit représenter le produit demandé ,les équipes seront aussi accompagnée par un encadreur des
                    projets qui vérifie et valide le travaille du groupe .
                </p>
                <br />
                <p> Donc on s'était mis d'accord sur développer une application web/mobile qui gére le signalement des annomalies au niveau de l'école .</p>
            </div>
        </div>
    )
}
export default Propos;