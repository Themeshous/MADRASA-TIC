import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import { useState } from "react";
const Aide = () => {
    const images = [<First />, <Second />, <Third />, <Fourth />, <Fifth />];

    const [page, setpage] = useState(0);
    let precedent = true;
    let suivant = true;

    if (page == 0) { precedent = false; }
    else { precedent = true }

    if (page == (images.length - 1)) { suivant = false }
    else { suivant = true }

    return (
        <div className="CenterContent">
            {images[page]}
            <div className="Prev-Suiv">
                <div>
                    {precedent && (<button onClick={() => { setpage(page => page - 1) }}>
                        <p>précédent</p>
                    </button>)}
                </div>
                <div>
                    {
                        suivant && (<button onClick={() => setpage(page => page + 1)}>
                            <p> suivant</p></button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Aide;