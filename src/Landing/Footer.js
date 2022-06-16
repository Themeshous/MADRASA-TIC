import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
                <nav className="nav">
                    <div className="logo-container">
                        <h2> MADRASA-TIC </h2>
                        <p>
                            Ecole Nationale Supérieure<br />
                            d'Informatique (ESI) , 6958+WP4,<br/>
                            Sidi Bel Abbès 22000
                        </p>
                    </div>
                    <dl className="navigate">
                        <dt> Liens rapides </dt>
                        <dd>
                            <a href="/"> Acceuil Site </a>
                        </dd>
                        <dd>
                            <a href="/auth/Connect"> Connexion </a>
                        </dd>
                        <dd>
                            <a href="/Aide"> Comment ça marche </a>
                        </dd>
                        <dd>
                            <a href="/En-Savoir-Plus"> En savoir plus </a>
                        </dd>
                    </dl>
                    <dl className="contact">
                        <dt> Contactez nous </dt>
                        <dd>
                            contact@esi-sba.dz
                        </dd>
                        <dd>
                            +213 (0) 99 99 99 99
                        </dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd>
                        <a href="/A-propos-de-nous"> A propos de nous </a>
                        </dd>
                    </dl>
                </nav>
            <div className="bot">
                <p>
                © Copyright 2022 MADRASA-TIC.com | Tous droits réservés 
                </p>
            </div>
        </div>
    )
}

export default Footer
