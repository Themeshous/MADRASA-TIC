import { useNavigate } from "react-router-dom"
import "../SignUp/FormLog.css"
const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className="unauthorized">
            <h2>Vous n'etes pas authorisé à y acceder à cette page!</h2>
            <br />
            <div className="flexGrow">
                <button className="flexGrow-btn" onClick={goBack}>Retour</button>
            </div>
        </div>
    )
}

export default Unauthorized