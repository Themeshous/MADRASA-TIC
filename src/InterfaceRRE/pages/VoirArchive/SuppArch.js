import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const SuppArch = ({Searchkey}) => {
    const [showsupp, setshowsupp] = useState(false)
    const [showsupprest, setshowsupprest] = useState(false)
    const executesupp = () => {
        //suppression 
        setshowsupp(false)
        axios.post(""+Searchkey, {
      }).then((Response) => {
            console.log(Response);
      });
    }
    const executerest = () => {
        //restaurer
        setshowsupprest(false)
        axios.post(""+Searchkey, {
        }).then((Response) => {
              console.log(Response);
        });
    }
    return (<div>
        <div className='last-col-rap'>
            <button className='btn-supp-arch' onClick={() => { setshowsupp(true); setshowsupprest(false) }}>
                <FontAwesomeIcon icon={faTrash} className="icon" />
            </button>
            <button className='btn-supp-arch' onClick={() => {  setshowsupprest(true);setshowsupp(false) }}>
                <FontAwesomeIcon icon={faRotateBackward} className="icon" />
            </button>
        </div>
        {
            showsupp && (<div className='suppression-menu'>
                <h4 className='titre-supp-conf'>Voulez vous vraiment supprimer ce rapport définitivement?</h4>
                <div className="btn-in-line">
                    <button className='btn-conf annuler'  onClick={() => setshowsupp(showsupp => false) }>
                        <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer'  onClick={executesupp}>
                    <a href='/chefserv/Archive' className='lien-archiv'> confirmer</a>
                    </button>
                </div>
            </div>)
        }
         {
            showsupprest && (<div className='suppression-menu'>
                <h4 className='titre-supp-conf'>Voulez vous vraiment restaurer ce rapport?</h4>
                <div className="btn-in-line">
                    <button className='btn-conf annuler'  onClick={() => setshowsupprest(showsupprest => false) }>
                        <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer'  onClick={executerest}>
                        <a href='/chefserv/Archive' className='lien-archiv'> confirmer</a>
                    </button>
                </div>
            </div>)
        }
    </div>
    )
}

export default SuppArch