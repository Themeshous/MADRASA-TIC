import './Landing.css'
const Footer = () => {
    return (
        <div className="footer">
                <nav className="nav">
                    <div className="logo-container">
                        <p>
                            Ecole Nationale Supérieure<br />
                            d’Informatique (ESI) , 6958+WP4,<br/>
                            Sidi Bel Abbès 22000
                        </p>
                    </div>
                    <dl className="navigate">
                        <dt> Explorer </dt>
                        <dd>
                            <a href="">Comment ça marche </a>
                        </dd>
                        <dd>
                            <a href="">Aide en ligne </a>
                        </dd>
                        <dd>
                            <a href="">Accessibilité </a>
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
                    </dl>
                    <dl className="privacy">
                        <dt> Privacy </dt>
                        <dd>
                            <a href="">Politique de confidentialité </a>
                        </dd>
                        <dd>
                            <a href="">Légalité </a>
                        </dd>
                    </dl>
                </nav>
            <div className="bot">
                <p>
                    Copyright © 2022
                </p>
            </div>
        </div>
    )
}

export default Footer
