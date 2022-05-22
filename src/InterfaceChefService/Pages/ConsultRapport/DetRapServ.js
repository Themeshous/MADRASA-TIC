import React from 'react'
import { useEffect, useState } from 'react'
import "../../../InterfaceGestAiguillage/pages/ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faFileDownload, faPen } from '@fortawesome/free-solid-svg-icons'
const DetRapServ = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [rapport, setrapport] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showbtnleft, setshowbtnleft] = useState(true);
  const [showbtnright, setshowbtnright] = useState(true)

  const id_rap = parseInt(id)
  const taille = localStorage.getItem("legthrapserv")

  function next() {
    if (id_rap > (taille-1)) {//à changer : on remplace 1 par lataille de la table-1 locale storage 
      setshowbtnright(false)
    }
    else {
      setshowbtnright(true)
    }
  }
  function prev() {
    if (id_rap < 2) {
      setshowbtnleft(false)
    }
    else {
      setshowbtnleft(true)
    }
  }
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/rapport/consultRapport/" + id);//get raport id=id and service=service mais id suffit 
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setrapport(listItems.result);
        setFetchError(null);
        next()
        prev()
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [id,next,prev])



  return (
    <>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          <div className='rapport-container'>
            
              <h1 className='Grand-titre'>{rapport.titre.slice(0, 1).toUpperCase() + rapport.titre.slice(1,)}</h1>
              <div className='btn-modifier'>
                <a href={`/chefserv/consulter/modifier/rapinfo?id=${id}`} className="text-next-rapp" >{/** lien vers form rapport avec id du rapport */}
                  Modifier <FontAwesomeIcon icon={faPen} className="icon-next" />
                </a>
              </div>
          
            <div className='sous-titre'>
              <h1 className='sous-titre-elem'> Date :
                <p className='head-related-info'>{rapport.date}</p>
              </h1>

            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Description</h1>
              <div className='related-info'>{rapport.description ? (rapport.description) : ("Ce rapport ne contient pas de description")}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Etat</h1>
              <div className='related-info'>{rapport.etat}</div>
            </div>
            <div className='elem-rapport'>
              <div className='inline-items'>
                <h1 className='titre-elem'> Fichier attaché</h1>
                {rapport.fichier ? (<a href="/lien de fichier" download>
                  <FontAwesomeIcon icon={faFileDownload} className="icon-rapport" />
                </a>) : ("")}
              </div>

              <div className='related-info'>{rapport.fichier ? (rapport.fichier) : ("Aucun fichier attaché")}</div>
            </div>

            <div className='btn-rapport'>
              {showbtnleft ? (<div className='btn-next'>
                <a href={`/chefserv/consulter/rapinfo?id=${(id_rap - 1).toString()}`} className="text-next-rapp" >
                  <FontAwesomeIcon icon={faChevronLeft} className="icon-next" />Précédent
                </a>
              </div>) : (<div className="white-point"> </div>)}
              {showbtnright ? (<div className='btn-next'>
                <a href={`/chefserv/consulter/rapinfo?id=${(id_rap + 1).toString()}`} className="text-next-rapp" >Suivant
                  <FontAwesomeIcon icon={faChevronRight} className="icon-next" />
                </a>
              </div>) : (<div className="white-point"></div>)}


            </div>
          </div>}
    </>

  )
}

export default DetRapServ