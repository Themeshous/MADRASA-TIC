import React from 'react'
import "../../../InterfaceGestAiguillage/pages/ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCheck, faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from "axios";
export const ModDecServ = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [declaration, setdeclaration] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ShowconfCour, setShowconfcour] = useState(false);
  const [ShowconfTrait, setShowconftrait] = useState(false);
  const [msg, setmsg] = useState("")
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/declaration/userDeclarations/" + id);
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setdeclaration(listItems);

        setFetchError(null);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [id, declaration])

  useEffect(() => {
    setInterval(() => { setShowconfcour(false); setShowconftrait(false) }, 7000)
  }, [])

  const ChangeStatedeclarationcour = async () => {
    setShowconfcour(true);
    setShowconftrait(ShowconfTrait => false)
    if (!(declaration.etat==='Traité')) {
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
      { id: declaration.id_dec, newState: "Encours", newService: declaration.service });
    //change etat to Encour
    //send to user that En cour de traitement
    setmsg("Vous avez modifié l'état de la déclaration vers en cours de traitement")
    } else {
      setmsg("On ne peut pas changer l'état de cette déclaration car elle est déjà traitée!")
    }
    
  }

  const ChangeStatedeclarationtrait = async () => {
    setShowconftrait(true);
    setShowconfcour(ShowconfCour => false)
    await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
      { id: declaration.id_dec, newState: "Traité", newService: declaration.service });
    //Send to user la declation est prise en compte
    //change etat to traité
    //Send declaration to service 
    //Send to user la declation est prise en compte
  }


  return (
    <>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          <div className='rapport-container'>
            <h1 className='Grand-titre'>{declaration.titre.slice(0, 1).toUpperCase() + declaration.titre.slice(1,)}</h1>
            <div className='sous-titre'>
              <h1 className='sous-titre-elem'>Lieu:
                <p className='head-related-info'>{declaration.localisation}</p>
              </h1>
              <div className='inline-items-declaration'>

                

                <button className='submit  EnCours' type='submit'
                  onClick={ChangeStatedeclarationcour}>
                  En Cours <FontAwesomeIcon icon={faSpinner} className="icon-next" /></button>
                  {declaration.IDrap && <button className='submit traité' type='submit'
                  onClick={ChangeStatedeclarationtrait}>
                  Traité <FontAwesomeIcon icon={faCheck} className="icon-next" /></button>}
                  

              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'> Date</h1>
                <div className='related-info'>{declaration.date.slice(0,10)}</div>
              </div>
              <div className='elem-rapport'>
                <h1 className='titre-elem'> Etat</h1>
                <div className='related-info'>{declaration.etat}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Description</h1>
                <div className='related-info'>{declaration.description ? (declaration.description) : ("Cette déclaration ne contient pas de description")}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Image</h1>
                <div className='related-info'>{declaration.imageFile ? (<img src={"http://localhost:2000/images/" + declaration.imageFile} className='image-declaration'/>) : ("Cette déclaration ne contient pas d'image")}</div>
              </div>
            </div>
            {declaration.IDrap?(<button className='attacher' type='submit'>
                  <a href={`/chefserv/consulter/rapinfo?id=${declaration.IDrap.toString()}`} className="text-next-rapp-attacher" >
                  Visualiser le rapport attaché <FontAwesomeIcon icon={faEye} className="icon-next" />
                  </a></button>):( <button className='attacher' type='submit'>
                  <a href={`/chefdeservice/Create?id=${declaration.id_dec.toString()}`} className="text-next-rapp-attacher" >
                    Attacher un rapport <FontAwesomeIcon icon={faAdd} className="icon-next" />
                  </a></button>)}
           
            {ShowconfCour && <div className="alerte-msg">{msg}</div>}
            {ShowconfTrait && <div className="alerte-msg">Vous avez modifié l'état de la déclaration vers traitée</div>}

          </div>

      }
    </>)
}