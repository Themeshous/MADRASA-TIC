import React from 'react'
import { useEffect, useState } from 'react'
import "../../../InterfaceGestAiguillage/pages/ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faPen } from '@fortawesome/free-solid-svg-icons'
const DetRapServ = () => {



  const [base64String, setbase64String] = useState(null);  

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [rapport, setrapport] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/rapport/consultRapport/" + id);//get raport id=id and service=service mais id suffit 
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setrapport(listItems.result);
        setFetchError(null);
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
            {!(rapport.etat === "Envoyé") && (<div className='btn-modifier'>
              <a href={`/chefserv/consulter/modifier/rapinfo?id=${id}`} className="text-next-rapp-mod" >{/** lien vers form rapport avec id du rapport */}
                Modifier <FontAwesomeIcon icon={faPen} className="icon-next" />
              </a>
            </div>)}


            <div className='sous-titre'>
              <h1 className='sous-titre-elem'> Date :
                <p className='head-related-info'>{rapport.date}</p>
              </h1>

            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Description</h1>
                <div className='related-info'>{rapport.description ? (rapport.description) : ("Ce rapport ne contient pas de description")}</div>
              </div>

              <div className='elem-rapport'>
                <h1 className='titre-elem'>Etat</h1>
                <div className='related-info'>{rapport.etat}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <div className='inline-items'>
                  <h1 className='titre-elem'> Fichier attaché</h1>
                  {rapport.fich_path ? (<a href={"http://localhost:2000/rapports/"+rapport.fich_path.slice(21,)} download>
                    <FontAwesomeIcon icon={faFileDownload} className="icon-rapport" />
                  </a>) : ("")}
                </div>

                <div className='related-info'>{rapport.fich_path ? (rapport.fich_path.slice(21,)) : ("Aucun fichier attaché")}</div>
              </div>
            </div>
         {
          rapport.IDdec &&<div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Declaration associée</h1>
                
                  <a href={`/chefdeservice/modifier/?id=${rapport.IDdec.toString()}`}className="lien-vers-rapport" >
                   voir la déclaration associée
                </a>
              </div>
            </div>
         }
            
          </div>}
    </>

  )
}

export default DetRapServ