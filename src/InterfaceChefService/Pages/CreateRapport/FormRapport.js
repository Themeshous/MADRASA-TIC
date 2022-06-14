import React, { useState, useEffect } from 'react'
import './Rapport.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export const CreerRapp = () => {

      const user = JSON.parse(localStorage.getItem("user"));
  
       const [date,setdate]= useState("")
       useEffect(() => {
         let today=new Date();
         let date = today.getFullYear()+ "/" +(today.getMonth()+1)+"/"+today.getDate();
         setdate(date)
       }, []);
        
     
      const [values, setValues] = useState({
            titre: '',
            description: '',
            fichier: null
      })

      const [errors, seterrors] = useState({})
      const [succes, setsucces] = useState()
      const [msg, setmsg] = useState('')
      const handlechange = e => {
            const { name, value } = e.target
            setValues({
                  ...values,
                  [name]: value
            })

      }
      const validate = (values) => {
            let errors = {}
            if (!values.titre.trim()) {
                  errors.titre = "Le titre est requis"
            }
            if (!values.description.trim()) {
                  errors.description = "La description est requise"
            }
            return errors;
      }
      const HandleSubmit = e => {
            e.preventDefault();
            seterrors(validate(values));

      }

      const [fileSelected, setfileSelected] = useState(null);

      const SelectFile = e => {
            setfileSelected(e.target.files[0])
      } 
         
      useEffect(() => {
            setInterval(() => { setsucces(false); }, 7000)
      }, [succes])

      console.log(fileSelected);

      const executeenreg = () => {
            const data = new FormData();
            data.append('File',fileSelected);
            if (!((values.description === '') && (values.titre === ''))) {
              
                  axios.post("http://localhost:2000/rapport/remplirRapport", {
                        date: date,
                        titre: values.titre,
                        description: values.description,
                        fichier:data,
                        service: user.prof,
                        etat: 'Enregistré',
                        soniddec:"2"

                  }).then((Response) => {
                        console.log(Response);
                  });
                  setsucces(true);
                  setmsg('Le rapport a été enregistré')

                  //ajouter le rapport si n'existe pas 
                  //modifier l'état de rapport dans la table des rapport si existe déja vers enregistré

            }
            if ((values.description === '') || (values.titre === '')) { setsucces(false) }

      }

      const executeenvoy = () => {
            const data = new FormData();
            data.append('File',fileSelected);
            if (!((values.description === '') && (values.titre === ''))) {
                  setsucces(true);
                  setmsg('Le rapport a été envoyé')
                
                  axios.post("http://localhost:2000/rapport/remplirRapport", {
                        date: date,
                        titre: values.titre,
                        description: values.description,
                        fichier: data,
                        service: user.prof,
                        etat: 'Envoyé',
                        soniddec:"2"

                  }).then((Response) => {
                        console.log(Response);
                  });
       
            }
            if ((values.description === '') || (values.titre === '')) { setsucces(false) }
      }
      return (
            <>
                  <div>
                        <form className='form-rapp' onSubmit={HandleSubmit}>
                              <h2 className='form-tit'>Compte-Rendu </h2>
                              <div className='content-form-rapp'>
                                    <h3 className='titl'> Titre rapport (*)</h3>
                                    <div className='form-iput'>
                                          <div className='form-inputs' >
                                                <label className='form-label-rap'>Saisissez le titre de votre rapport</label>
                                                <input id="titre" type="text"
                                                      name="titre"
                                                      className='input-title'
                                                      placeholder='Ajoutez un titre...'
                                                      value={values.titre}
                                                      onChange={handlechange}
                                                />
                                                {errors.titre && <p>{errors.titre}</p>}
                                          </div>

                                    </div>
                                    <h3 className='titl'>Description rapport (*)</h3>
                                    <div className='form-iput'>
                                          <div className='form-inputs'>
                                                <textarea id="description" type="text"
                                                      name="description"
                                                      placeholder='Ajoutez une description...'
                                                      className='ta-description'
                                                      value={values.description}
                                                      onChange={handlechange}
                                                />
                                                {errors.description && <p>{errors.description}</p>}
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
                              </div>
                              <div className='form-button'>
                                    <button type='submit' className='form-input-btn-par Enregistrer' onClick={executeenreg} >
                                          <p> Enregistrer </p></button>

                                    <button type='submit' className='form-input-btn-par Envoyer' onClick={executeenvoy} >
                                          <p> Envoyer </p></button>

                              </div>
                              {succes && <div className="alerte-msg">{msg}</div>}
                        </form>
                  </div>
            </>
      )
}