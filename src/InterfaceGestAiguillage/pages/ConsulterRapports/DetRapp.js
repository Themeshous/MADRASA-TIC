import React from 'react'
import { useEffect, useState } from 'react'
import "./rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faFileDownload } from '@fortawesome/free-solid-svg-icons'

const DetRapp = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [rapport, setrapport] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showbtnleft, setshowbtnleft] = useState(true);
  const [showbtnright, setshowbtnright] = useState(true)

  const id_rap = parseInt(id)
  const taille = localStorage.getItem("legthrapaig")
  function next() {
    if (id_rap > (taille-1)) {//à changer : on remplace 1 par lataille de la table-1 
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
        const response = await fetch("http://localhost:2000/rapport/consultRapport/" + id);
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

    setTimeout(() => fetchItems(), 1000);

  }, [id,rapport])



  return (
    <>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          <div className='rapport-container'>
            <h1 className='Grand-titre'>{rapport.titre.slice(0, 1).toUpperCase() + rapport.titre.slice(1,)}</h1>
            <div className='sous-titre'>
              <h1 className='sous-titre-elem'> Service :
                <p className='head-related-info'>{rapport.service}</p>
              </h1>

            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Date</h1>
              <div className='related-info'>{rapport.date}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Description</h1>
              <div className='related-info'>{rapport.description ? (rapport.description) : ("Ce rapport ne contient pas de description")}</div>
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
              {showbtnleft? (<div className='btn-next'>
                <a href={`/ResAig/rapports/rapinfo?id=${(id_rap - 1).toString()}`} className="text-next-rapp" >
                  <FontAwesomeIcon icon={faChevronLeft} className="icon-next" />Précédent
                </a>
              </div>):(<div className="white-point"> </div>)}
              {showbtnright? (<div className='btn-next'>
                <a href={`/ResAig/rapports/rapinfo?id=${(id_rap + 1).toString()}`} className="text-next-rapp" >Suivant
                  <FontAwesomeIcon icon={faChevronRight} className="icon-next" />
                </a>
              </div>):(<div className="white-point"></div>)}


            </div>
          </div>}
    </>

  )
}

export default DetRapp