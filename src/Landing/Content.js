import Header from "./Header.js"
import './Landing.css'
import alert from "../img/alerting.jpg"
import Footer from './Footer.js'
const Content = () => {
    return (
        <div className="container">
            <Header />
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
                        <a href="/Ensavoirplus">
                            En savoir plus
                        </a>
                    </button>
                </div>
            </div>
            <img src={alert} height="500" className="hero-img" />
            <div className="desc-container">
                <div className="cont">
                    <h3 className="title"> ESI for alert management</h3>
                    <p className="text">
                        Accéder et Gérer vos alertes en ligne!
                    </p>
                    <div>

                    </div>
                    <div className="btn-container">
                        <button>
                            <a href="/auth/connect">
                              Log In
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Content