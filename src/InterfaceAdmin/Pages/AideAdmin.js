import Header from "../Accessoirs/Header"
import { NavGauche } from "../Accessoirs/NavGauche"
import Aide from "../../Aide/Aide"

import "../../Aide/Aide.css"
const AideAdmin = () => {
    return (
        <div >
            <div className='Page-Admin'>
                <Header />
                <NavGauche />
            </div>
            <div className='middle-content'>
                 <Aide />
            </div>



        </div>
    )
}
export default AideAdmin