import React, { useState, useEffect } from 'react'
import '../CreateRapport/Rapport.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export const ModRap = () => {
     //Ramener les données précédente pour pouvoir modifier
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
    
        setTimeout(() => fetchItems(), 2000);
    
      }, [id])
    
    
    //Meme chose que l'autre form
    const [values, setValues] = useState({
            titre: '',
            description: '',
            fichier: ''
      })

      const [succes, setsucces] = useState()
      const [msg, setmsg] = useState('')
      const handlechange = e => {
            const { name, value } = e.target
            setValues({
                  ...values,
                  [name]: value
            })

      }
     
      const HandleSubmit = e => {
            e.preventDefault();
      }

      const [fileSelected, setfileSelected] = useState(null);

      const SelectFile = e => {
            setfileSelected(e.target.files[0])
      }
      useEffect(() => {
        setInterval(()=>{setsucces(false);},7000)
      }, [])
      console.log(succes);
      const executeenreg = () => {
                  setsucces(true);
                  setmsg('Le rapport a été enregistré')
                  //si rapport.état === envoyé pas la penne de changer l'état sinon on enregistre les nouvelles infos
                  //ajouter le rapport si n'existe pas 
                  //modifier l'état de rapport dans la table des rapport si existe déja vers enregistré
      }
     
      const executeenvoy = () => {
                        setsucces(true);
                       setmsg('Le rapport a été envoyé')
                       //ajouter le rapport si n'existe pas 
                      //modifier l'état de rapport dans la table des rapport si existe déja vers envoyé
            }
            return (
                  <>  {isLoading ? (<p className='loading'>Chargement...</p>) :
                  fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
                        <div>
                              <form className='form-rapp' onSubmit={HandleSubmit}>
                                    <h2 className='form-tit'>Compte-Rendu </h2>
                                    <h3 className='titl'> Titre rapport (*)</h3>
                                    <div className='form-iput'>
                                          <div className='form-inputs' >
                                                <label className='form-label-rap'>Saisissez le titre de votre rapport</label>
                                                <input id="titre" type="text"
                                                      name="titre"
                                                      className='input-title'
                                                      placeholder={rapport.titre}
                                                      value={values.titre}
                                                      onChange={handlechange}
                                                />
                                        
                                          </div>

                                    </div>
                                    <h3 className='titl'>Description rapport (*)</h3>
                                    <div className='form-iput'>
                                          <div className='form-inputs'>
                                                <textarea id="description" type="text"
                                                      name="description"
                                                      placeholder={rapport.description}
                                                      className='ta-description'
                                                      value={values.description}
                                                      onChange={handlechange}
                                                />
                                          </div>
                                    </div>
                                    <h3 className='titl'>  Fichier attaché </h3>
                                    <div className='form-inputs' >
                                          <label className='form-label-rap'>Selectionner un Document <b>PDF</b> pour votre rapport</label>
                                          <div className='file-c'>
                                                <div className='file-i'>

                                                      <button className='Upload'>
                                                            <i>
                                                                  <FontAwesomeIcon icon={faFileDownload} />Importer
                                                            </i>
                                                            <input id='fichier'
                                                                  name='fichier'
                                                                  type="file"
                                                                  onChange={SelectFile}
                                                            />
                                                      </button>
                                                      {fileSelected && <div className='fichier-selectionné'>
                                                            {fileSelected.name}
                                                      </div>}
                                                </div>
                                          </div>
                                    </div>
                                    <div className='form-button'>
                                          <button type='submit' className='form-input-btn-par Enregistrer' onClick={executeenreg} >
                                                <p> Enregistrer </p></button>

                                                <button type='submit' className='form-input-btn-par Envoyer' onClick={executeenvoy} >
                                                <p> Envoyer </p></button>
                                             
                                    </div>
                                 {succes && <div className="alerte-msg">{msg}</div>}
                              </form>
                        </div>}
                  </>
            )
      }