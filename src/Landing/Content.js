import Header from "./Header.js"
import './Landing.css'
import alert from "../img/alerting.jpg"
import Footer from './Footer.js'
const Content = () => {
    return (
        <div>
            <div className="backpicture">
            <Header />
            <div className="container">
                <div className="monitoring-container">
                    <h2 className="slogan">Platforme MADRASA-TIC</h2>
                    <p className="text">
                        La gestion des alertes en ligne qu'offre la platforme MADRASA-TIC est une
                        nouvelle methode de gestion qui a comme objectif de faciliter le signalement
                        des problémes au niveau de l'école ESI-SBA et la prise en charge de ces
                        annomalies par les autorités responsables de leurs resolutions.
                    </p>
                    <div className="btn-container">
                        <button>
                            <a href="/En-savoir-plus">
                                En savoir plus
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Content