import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import axios from 'axios';
const SupCatServ = ({keysearch,name}) => {
    const [Showsuppservice, setShowsuppservice] = useState(false)
    const [success, setsuccess] = useState(false)
    const [msg, setmsg] = useState('')
    useEffect(() => {
        setInterval(() => { setsuccess(false); }, 7000)
      }, [])
    const supservcat =()=>{
        setShowsuppservice(false)
        setsuccess(true)
        if (name==='service') {
            setmsg("Le service est supprimé!")
            axios.delete("http://localhost:2000/service", {service:"Igiène" })
        } else {
            //supprimer la qategory key
            setmsg("La catégorie est supprimée!")
            axios.delete("http://localhost:2000/category", {service:keysearch })
        }
    }
   console.log(keysearch);
  return (
    <div>
                <button onClick={() => setShowsuppservice(true)} className='services-categorie-btn-sup'>
                    <FontAwesomeIcon icon={faTrash} className="icon" />
                </button> 
                {Showsuppservice && <div className="services-categorie-confirmation">
                 
                    {(name==='service')? <h4 className="services-categorie-conf-text">voulez vraiment supprimer ce service?</h4>
                    :(<h4 className="services-categorie-conf-text">voulez vraiment supprimer cette category?</h4>)}
                  
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowsuppservice(false)}>
                      <p> non</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={supservcat}>
                      <p> oui</p>
                    </button>
                  </div>
              </div>}
              {success && <div className="alerte-msg">{msg}</div>}
    </div>
  )
}

export default SupCatServ