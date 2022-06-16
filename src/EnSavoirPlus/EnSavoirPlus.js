import Savoir from "./Savoir"
import "./EnSavoirPlus"
import Header from "../Landing/Header"
import Footer from "../Landing/Footer"
const SavoirPage = () => {
    return (
        <div >
             <div className="header-not-landing">
        <Header /></div>
        <div className="a-propos">
            <div className="milieu-prepos" />
             <Savoir />
        </div>
        <Footer />
    </div>
  
    )
}
export default SavoirPage