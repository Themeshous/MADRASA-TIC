import Header from "../Landing/Header"
import Aide from "./Aide"
import photo from "../img/help.jpg"
const AidePage = () => {
    return (
        <div >
              <div className="header-not-landing">
                  <Header />
            </div>
            <div className="aide-hors-ligne">
                  <div className="help-image">
                  <img src={photo} className="help-img" />
                  
                  </div>
                <div className="contenu-aide">
                    <Aide />
                
                </div>
            </div>
        </div>
    )
}
export default AidePage