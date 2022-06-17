import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    const [Services, setServices] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [Showsuppservice, setShowsuppservice] = useState(false)
    const [Showaddserv, setShowaddserv] = useState(false)
    const [values, setvalues] = useState({ newservice: ''});
    const [errors, seterrors] = useState({})
    useEffect(() => {
  
      const fetchItems = async () => {
        try {
          const response = await fetch("http://localhost:2000/service");
          if (!response.ok) throw Error("les données n'ont pas été reçus");
          const listItems = await response.json();
          setServices(listItems);
          setFetchError(null);
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      setTimeout(() => fetchItems(), 1000);
  
    }, [])

   const handlechange = e => {
        const { name, value } = e.target
        setvalues({
          ...values,
          [name]: value
        })
      }
      const validate = (values) => {
        let errors = {}
        if (Services.includes(values.newservice)) {//si new service appartient à la table
          errors.newservice = "Ce service existe déjà"
        }
        return errors;
      }
    
     const supprimerserv = (id) => {
       // setShowsuppservice(false)
        //supprimer le service de cet id
      }
      const Ajouterservice = () => {
        setShowaddserv(false)
        //ajouter le service si il n y a pas d erreur
        
      }
      const affichermenu = () =>{
        setShowsuppservice(true)
      }
      console.log(Showsuppservice);

  return (
    <div>
    {isLoading ? (<p className='loading'>Chargement...</p>) :
      fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          <div className='services-categorie'>
            <button className='services-categorie-ajouter' onClick={()=>{setShowaddserv(true)}}>Ajouter un service +</button>
            <div className='services-categorie-side'>
              <h3 className='services-categorie-table-head'>Les Services</h3>
              
              {Services.map((serv) =>
              <li key={serv}>
                {serv} 
                <button onClick={() => setShowsuppservice(true)} className='services-categorie-btn-sup'>
                    <FontAwesomeIcon icon={faTrash} className="icon" />
                </button> 
                {Showsuppservice && <div className="services-categorie-confirmation">
                  <h4 className="services-categorie-conf-text">
                    voulez vraiment supprimer ce service?
                  </h4>
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowsuppservice(false)}>
                      <p> non</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={supprimerserv(serv)}>
                      <p> oui</p>
                    </button>
                  </div>
              </div>}
              </li>
              )}  
                    
            </div>
            {Showaddserv && <div className='services-categorie-confirmation'>
              <h4 className="services-categorie-conf-text">
                Entrez le nom de nouveau service ?
              </h4>
              <input
                id='newservice'
                type="text"
                name='newservice'
                className='form-input-declaration-rej'
                placeholder='Nom de nouveau service'
                value={values.newservice}
                onChange={handlechange} />
                 {errors.newservice&& <p>{errors.newservice}</p>}
              <div className="btn-in-line">
                <button className='btn-conf annuler' type='submit' onClick={() => setShowaddserv(Showaddserv => false)}>
                  <p> Annuler</p>
                </button>
                <button className='btn-conf confirmer' type='submit' 
                  onClick={Ajouterservice}>
                  <p> confirmer</p>
                </button>
              </div>
              </div>
              }
          </div>}

</div>
  )
}

export default Service   
/*{Showsuppservice && <div className="confirmation">
                  <h4 className="texte-xonfirmation">
                    voulez vraiment supprimer ce service?
                  </h4>
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowsuppservice(Showsuppservice => false)}>
                      <p> non</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={supprimerserv(serv)}>
                      <p> oui</p>
                    </button>
                  </div>
              </div>}*/
          /*    {Showaddserv && <div className='Ajouter-serv'>
              <h4 className="texte-xonfirmation">
                Entrez le nom de nouveau service ?
              </h4>
              <input
                id='newservice'
                type="text"
                name='newservice'
                className='form-input-declaration-rej'
                placeholder='Nom de nouveau service'
                value={values.newservice}
                onChange={handlechange} />
                 {errors.newservice&& <p>{errors.newservice}</p>}
              <div className="btn-in-line">
                <button className='btn-conf annuler' type='submit' onClick={() => setShowaddserv(Showaddserv => false)}>
                  <p> Annuler</p>
                </button>
                <button className='btn-conf confirmer' type='submit' onSubmit={HandleSubmit}
                  onClick={Ajouterservice}>
                  <p> confirmer</p>
                </button>
              </div>
              </div>
              }*/