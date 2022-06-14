import React from 'react'
import "../../../InterfaceGestAiguillage/pages/ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faFileDownload, faPen } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const DetAnn = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [announce, setannounce] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //legthann
  const [showbtnleft, setshowbtnleft] = useState(true);
  const [showbtnright, setshowbtnright] = useState(true)

  const id_post = parseInt(id)
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  const tab = removeItemAll(Array.from(localStorage.getItem("legthann")), ',')
  const taille = tab.length;
  const ind = tab.indexOf(id)
  function next() {
    if (ind > (taille - 2)) {//à changer : on remplace 1 par lataille de la table-1 locale storage 
      setshowbtnright(false)
    }
    else {
      setshowbtnright(true)
    }
  }
  function prev() {
    if (ind < 1) {
      setshowbtnleft(false)
    }
    else {
      setshowbtnleft(true)
    }
  }

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/announce/consultAnnounce/" + id);
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setannounce(listItems.result);
        setFetchError(null);
        next();
        prev();

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [id, announce])
  console.log(announce);
  return (
    <>
    {isLoading ? (<p className='loading'>Chargement...</p>) :
      fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
        <div className='rapport-container'>

          <h1 className='Grand-titre'>{announce.titre}</h1>
          <div className='btn-modifier'>
            <a href={`/RRE/Consulter/modifier?id=${id}`} className="text-next-rapp-mod" >{/** lien vers form rapport avec id du rapport */}
              Modifier <FontAwesomeIcon icon={faPen} className="icon-next" />
            </a>
          </div>


          <div className='sous-titre'>
            <h1 className='sous-titre-elem'> Date :
              <p className='head-related-info'>{announce.datepost}</p>
            </h1>

          </div>
          <div className='element-line'>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Organisateur</h1>
              <div className='related-info'>{announce.organisateur ? (announce.organisateur) : ("Cette annonce ne contient pas de description")}</div>
            </div>
          
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Description</h1>
              <div className='related-info'>{announce.description ? (announce.description) : ("Cette annonce ne contient pas de description")}</div>
            </div>
          </div>
          <div className='element-line'>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>lien</h1>
              <div className='related-info'>{announce.lien ? (announce.lien) : ("Cette annonce ne contient pas de lien")}</div>
            </div>
            <div className='elem-rapport'>
              <div className='inline-items'>
                <h1 className='titre-elem'> Fichier attaché</h1>
                {announce.fichier ? (<a href="/lien de fichier" download>
                  <FontAwesomeIcon icon={faFileDownload} className="icon-rapport" />
                </a>) : ("")}
              </div>

              <div className='related-info'>{announce.fichier ? (announce.fichier) : ("Aucun fichier attaché")}</div>
            </div>
            
          </div>
          <div className='btn-rapport'>
            {showbtnleft ? (<div className='btn-next'>
              <a href={`/RRE/Consulter/details?id=${(tab[ind- 1] )}`} className="text-next-rapp" >
                <FontAwesomeIcon icon={faChevronLeft} className="icon-next" />Précédent
              </a>
            </div>) : (<div className="white-point"> </div>)}
            {showbtnright ? (<div className='btn-next'>
              <a href={`/RRE/Consulter/details?id=${(tab[ind+1] )}`} className="text-next-rapp" >Suivant
                <FontAwesomeIcon icon={faChevronRight} className="icon-next" />
              </a>
            </div>) : (<div className="white-point"></div>)}


          </div>
        </div>}
  </>

  )
}

export default DetAnn