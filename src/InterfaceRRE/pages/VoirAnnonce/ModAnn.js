import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import validator from 'validator'
import '../CreateAnn/Annonce.css'

import axios from "axios";


const ModAnn = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
  
    const [announce, setannounce] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
      const fetchItems = async () => {
        try {
          const response = await fetch("http://localhost:2000/announce/consultAnnounce/" + id);
          if (!response.ok) throw Error("les données n'ont pas été reçus");
          const listItems = await response.json();
          setannounce(listItems.result);
  
          setFetchError(null);
  
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      setTimeout(() => fetchItems(), 1000);
  
    }, [id, announce])

  ///*********************************************************************************************** */
  const [values, setValues] = useState({
    titre: '',
    description: '',
    organisateur:'',
    fichier: null,
    image: null,
    lien: '',
    dated: ''
})
const [errors, seterrors] = useState({})
const [succes, setsucces] = useState()
const [showfirst, setshowfirst] = useState(true)
const [fileSelected, setfileSelected] = useState(null);
const [showconf, setshowconf] = useState(false)
const [showconfarch, setshowconfarch] = useState(false)
const SelectFile = e => {
    setfileSelected(e.target.files[0])

}
const handlechange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })

}
const validate = (values) => {
    let errors = {}
     if (!(validator.isURL(values.lien)) &&(values.lien.trim())) {
      errors.lien = "le lien est non valide " 

    }
    return errors;
}

const HandleSubmit = e => {
    e.preventDefault();
    seterrors(validate(values));

}

useEffect(() => {
    setInterval(() => { setsucces(false); }, 7000)
}, [succes])

const execsuiv = () => {
          setshowfirst(false)
        //passer à la page suivante
}
const execprec = () => {
    setshowfirst(true) 
}

const ExecSubmitEnr=()=>{
    setshowconfarch(false)
    setshowconf(true)
  //afficher menu confirmation
}
const ExecSubmitconf = () => {
    if( (!(validator.isURL(values.lien)) &&(values.lien.trim()))) { setsucces(false) }
    if  ((!(!(validator.isURL(values.lien)) &&(values.lien.trim())))) {
        setsucces(true);
        setshowconf(false)
        //enregistrer l'annonce dans la BDD
        axios.post("http://localhost:2000/announce/sauvgAnnounce/" + id, {
            titre:  ((values.titre)?(values.titre):(announce.titre)),
            description: ((values.description)?(values.description):(announce.description)),
            fichier: "",
            service: user.prof,
            etat: "Enregistré"

      }).then((Response) => {
            console.log(Response);
      });
    }
}
const ExecSubmitArch = () =>{
    setshowconfarch(true)
    setshowconf(false)
    
}
const ExecSubmitconfarch = () => {
    if( (!(validator.isURL(values.lien)) &&(values.lien.trim()))) { setsucces(false) }
    if  ((!(!(validator.isURL(values.lien)) &&(values.lien.trim())))) {
        setsucces(true);
        setshowconfarch(false)
        axios.post("http://localhost:2000/announce/archiveAnnounce/" + id, {
            titre:  ((values.titre)?(values.titre):(announce.titre)),
            description: ((values.description)?(values.description):(announce.description)),
            service: user.prof,
            etat: "Enregistré"

      }).then((Response) => {
            console.log(Response);
      });
        //archiver
    }
}
  return (
    <>
   {isLoading ? (<p className='loading'>Chargement...</p>) :
      fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
      <div>
      <form className='form-annonce' onSubmit={HandleSubmit}>
          {showfirst ? (<> <h2 className='titre-annonce'> Modifier L'annonce:</h2>
              <div className='content-form-annonce'>
                  <h3 className='titl-annonce'> Titre de l'annonce</h3>
                  <div className='form-iput-annonce'>
                      <div className='form-inputs-annonce' >
                          <label className='form-label-annonce'>Modifier le titre de votre annonce</label>

                          <input id="titre" type="text"
                              name="titre"
                              className='input-title-annonce'
                              placeholder={announce.titre}
                              value={values.titre}
                              onChange={handlechange}
                          />
                      </div>

                  </div>
                  <h3 className='titl-annonce'>L'organisateur</h3>
                  <div className='form-iput-annonce'>
                      <div className='form-inputs-annonce' >
                          <label className='form-label-annonce'>Modifier l'organisateur de l'évènnement</label>

                          <input id="organisateur" type="text"
                              name="organisateur"
                              className='input-org-annonce'
                              placeholder={announce.organisateur}
                              value={values.organisateur}
                              onChange={handlechange}
                          />
                      </div>

                  </div>
                  <h3 className='titl-annonce'> Description de l'annonce </h3>
                  <div className='form-iput-annonce'>
                      <div className='form-inputs-annonce' >
                          <label className='form-label-annonce'>Modifier la description de votre annonce</label>
                          <div className='des-cont'>
                              <textarea id="description" type="text"
                                  name="description"
                                  placeholder={announce.description}
                                  className='input-description'
                                  value={values.description}
                                  onChange={handlechange}
                              />
                          </div>
                      </div>

                  </div>
              </div>
              <div className='btn-next-annonce'>
                  <button className='btn-next-annonce-self' onClick={execsuiv}>
                      suivant <FontAwesomeIcon icon={faCircleChevronRight} /> </button>
              </div>
          </>) : (<>
              <div className='btn-next-annonce-préc'>
                  <button className='btn-next-annonce-préc-self' type='submit' onClick={execprec}>
                      <FontAwesomeIcon icon={faCircleChevronLeft} /> précédent </button>
              </div>
              
              <h2 className='titre-annonce'> Ajoutez plus de détails pour votre annonce:</h2>

              <div className='content-form-annonce'>
                  <h3 className='titl-annonce'> Ajoutez un lien :</h3>
                  <div className='form-iput-annonce'>
                      <div className='form-inputs-annonce' >
                          <label className='form-label-annonce'>Ajoutez un lien de form :</label>

                          <input id="lien" type="text"
                              name="lien"
                              className='input-title-annonce'
                              placeholder={announce.lien?announce.lien:"https://example.com"}
                              value={values.lien}
                              onChange={handlechange}
                          />
                          {errors.lien && <p className='error-msg'>{errors.lien}</p>}
                      </div>

                  </div>
                  <h3 className='titl-annonce'> Modifier les dates de début et de fin d'apparition : </h3>
                  <div className='inputs-inline-annonce'>
                      <div className='form-iput-annonce'>
                          <div className='form-inputs-annonce' >
                              <label className='form-label-annonce'>Date de début d'apparition:</label>

                              <input id="dated" type="text"
                                  name="dated"
                                  className='input-title-annonce'
                                  placeholder={announce.datepost.slice(0, 10)}
                                  value={values.dated}
                                  onChange={handlechange}
                                
                              />
                          </div>

                      </div>
                  </div>
                  <h3 className='titl-annonce'>  Attachez un fichier ou une image: </h3>
                  <div className='form-iput-annonce'>
                          <div className='form-inputs-annonce' >
                                    <label className='form-label-annonce'>Selectionnez un Document:</label>
                                    <div className='file-c'>
                                          <div className='file-i'>

                                                <button className='Upload'>
                                                      <i>
                                                            <FontAwesomeIcon icon={faFileDownload} />Importer
                                                      </i>
                                                      <input id='fichier'
                                                            name='fichier'
                                                            type="file"
                                                            placeholder={announce.fichier?announce.fichier:""}
                                                            onChange={SelectFile}
                                                      />
                                                </button>
                                                {fileSelected && <div className='fichier-selectionné'>
                                                      {fileSelected.name}
                                                </div>}
                                          </div>
                                    </div>
                              </div>
                              </div>

              </div>

              <div className='form-button-annonce'>
                 <button type='submit' className='form-input-btn-par Archiver' onClick={ExecSubmitArch} >
                      <p> Archiver </p></button>
                  <button type='submit' className='form-input-btn-par Envoyer' onClick={ExecSubmitEnr} >
                      <p> Envoyer </p></button>
                     
                      {/**ajouter un boutton archiver */}
                      {/*/menu de confirmation/*/}
                      {showconf && (<div className='menu-envoyer'>
                <h4 className='titre-supp-conf'>si vous envoyer , les modifications vont etre partagée!</h4>
                <div className="btn-in-line">
                    <button className='btn-conf annuler'  onClick={() => setshowconf(showconf => false) }>
                        <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer'  onClick={ExecSubmitEnr}>
                        <a href='/RRE/Consulter' className='lien-archiv'> confirmer</a>
                    </button>
                </div>
            </div>)
        }
         {showconfarch && (<div className='menu-envoyer'>
                <h4 className='titre-supp-conf'>si vous archiver cette annonce elle ne sera plus partagée avec les utilisateurs!</h4>
                <div className="btn-in-line">
                    <button className='btn-conf annuler'  onClick={() => setshowconfarch(showconfarch => false) }>
                        <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer'  onClick={ExecSubmitconfarch}>
                        <a href='/RRE/archive' className='lien-archiv'> confirmer</a>
                    </button>
                </div>
            </div>)
        }
              </div>
              {succes && <div className="alerte-msg">{"Les mises à jours ont été envoyés"}</div>}</>)}
      </form>
  </div> }
    </>
  )
}

export default ModAnn