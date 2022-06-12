import Header from "../Landing/Header"
import Footer from "../Landing/Footer"
import Propos from "./Propos"
const ProposPage = () => {
    return (
        <div >
            <div className="header-not-landing">
            <Header />
            </div>
            <div className="a-propos">
                <div className="milieu-prepos" />
                <Propos />
            </div>
            <Footer />
        </div>
    )
}
export default ProposPage