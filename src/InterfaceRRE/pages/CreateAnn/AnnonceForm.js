import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import validator from 'validator'
import './Annonce.css'
export const AnnonceForm = () => {
    //const user = JSON.parse(localStorage.getItem("user"));
    const [values, setValues] = useState({
        titre: '',
        description: '',
        organisateur:'',
        fichier: null,
        image: null,
        lien: '',
        dated: '',
        datef: '',
    })
    const [errors, seterrors] = useState({})
    const [succes, setsucces] = useState()
    const [msg, setmsg] = useState('')
    const [showfirst, setshowfirst] = useState(true)
    const [fileSelected, setfileSelected] = useState(null);

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
        if (!values.titre.trim()) {
            errors.titre = "Le titre est requis"
        }
        if (!values.description.trim()) {
            errors.description = "La description est requise"
        } if (!(validator.isURL(values.lien)) &&(values.lien.trim())) {
          errors.lien = "le lien est non valide " 

        }
        if (!values.organisateur.trim()) {
            errors.organisateur="vous devez spécifier un organisateur"
        }
        if (!values.dated.trim()) {
            errors.dated = "La date début est requise"
        } if (!values.datef.trim()) {
            errors.datef = "La date fin est requise"
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
        if (!((values.description === '') && (values.titre === ''))) {
            setshowfirst(false)
            //passer à la page suivante
        }
        if ((values.description === '') || (values.titre === '')) { setshowfirst(true) }
    }
    const execprec = () => {
        setshowfirst(true) 

    }
    const ExecSubmitEnr = () => {
        if( (!(validator.isURL(values.lien)) &&(values.lien.trim()))||(!values.dated.trim())||(!values.datef.trim())) { setsucces(false) }
        if  ((!(!(validator.isURL(values.lien)) &&(values.lien.trim())))&&(values.dated.trim())&&(values.dated.trim())) {
            setsucces(true);
            setmsg("L'annonce a été enregistrée")
            //enregistrer l'annonce dans la BDD
        }
    }

    const ExecSubmitEnv = () => {
        if( (!(validator.isURL(values.lien)) &&(values.lien.trim()))||(!values.dated.trim())||(!values.datef.trim())) { setsucces(false) }
        if  ((!(!(validator.isURL(values.lien)) &&(values.lien.trim())))&&(values.dated.trim())&&(values.dated.trim())) {
            setsucces(true);
            setmsg("L'annonce va etre partagée le jour " + values.dated)

            //partager l'annonce
        }
    }
    
    return (
        <div>
            <form className='form-annonce' onSubmit={HandleSubmit}>
                {showfirst ? (<> <h2 className='titre-annonce'> Ajoutez une nouvelle annonce:</h2>
                    <div className='content-form-annonce'>
                        <h3 className='titl-annonce'> Titre de l'annonce</h3>
                        <div className='form-iput-annonce'>
                            <div className='form-inputs-annonce' >
                                <label className='form-label-annonce'>Ajoutez un titre à votre annonce</label>

                                <input id="titre" type="text"
                                    name="titre"
                                    className='input-title-annonce'
                                    placeholder='Ajoutez un titre...'
                                    value={values.titre}
                                    onChange={handlechange}
                                />
                                {errors.titre && <p className='error-msg'>{errors.titre}</p>}
                            </div>

                        </div>
                        <h3 className='titl-annonce'>L'organisateur</h3>
                        <div className='form-iput-annonce'>
                            <div className='form-inputs-annonce' >
                                <label className='form-label-annonce'>Qui est l'organisateur de l'evennement</label>

                                <input id="organisateur" type="text"
                                    name="organisateur"
                                    className='input-org-annonce'
                                    placeholder='Ajoutez un organisateur...'
                                    value={values.organisateur}
                                    onChange={handlechange}
                                />
                                {errors.organisateur && <p className='error-msg'>{errors.organisateur}</p>}
                            </div>

                        </div>
                        <h3 className='titl-annonce'> Description de l'annonce </h3>
                        <div className='form-iput-annonce'>
                            <div className='form-inputs-annonce' >
                                <label className='form-label-annonce'>Ajoutez une description à votre annonce</label>
                                <div className='des-cont'>
                                    <textarea id="description" type="text"
                                        name="description"
                                        placeholder='Ajoutez une description...'
                                        className='input-description'
                                        value={values.description}
                                        onChange={handlechange}
                                    />
                                    {errors.description && <p className='error-msg'>{errors.description}</p>}
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
                    
                    <h2 className='titre-annonce'> Ajoutez plus de détails por votre annonce:</h2>

                    <div className='content-form-annonce'>
                        <h3 className='titl-annonce'> Ajoutez un lien :</h3>
                        <div className='form-iput-annonce'>
                            <div className='form-inputs-annonce' >
                                <label className='form-label-annonce'>Ajoutez un lien de form :</label>

                                <input id="lien" type="text"
                                    name="lien"
                                    className='input-title-annonce'
                                    placeholder="https://example.com"
                                    value={values.lien}
                                    onChange={handlechange}
                                />
                                {errors.lien && <p className='error-msg'>{errors.lien}</p>}
                            </div>

                        </div>
                        <h3 className='titl-annonce'> Ajoutez une date de début et fin d'apparition : </h3>
                        <div className='inputs-inline-annonce'>
                            <div className='form-iput-annonce'>
                                <div className='form-inputs-annonce' >
                                    <label className='form-label-annonce'>Date de début d'apparition:</label>

                                    <input id="dated" type="date"
                                        name="dated"
                                        className='input-title-annonce'
                                        placeholder="mm/jj/aaaa"
                                        value={values.dated}
                                        onChange={handlechange}
                                      
                                    />
                                    {errors.dated && <p className='error-msg'>{errors.dated}</p>}
                                </div>

                            </div>
                            <div className='form-iput-annonce'>
                                <div className='form-inputs-annonce' >
                                    <label className='form-label-annonce'>Date de fin d'apparition :</label>

                                    <input id="datef" type="date"
                                        name="datef"
                                        className='input-title-annonce'
                                        placeholder="mm/jj/aaaa"
                                        value={values.datef}
                                        onChange={handlechange}
                                   
                                    />
                                    {errors.datef && <p className='error-msg'>{errors.datef}</p>}
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
                        <button type='submit' className='form-input-btn-par Enregistrer' onClick={ExecSubmitEnr} >
                            <p> Enregistrer </p></button>

                        <button type='submit' className='form-input-btn-par Envoyer' onClick={ExecSubmitEnv} >
                            <p> Envoyer </p></button>


                    </div>
                    {succes && <div className="alerte-msg">{msg}</div>}</>)}
            </form>
        </div>
    )
}
 /*
    axios.post("http://localhost:2000/rapport/remplirRapport", {
          date: "24 / 05 / 2002",
          titre: values.titre,
          description: values.description,
          fichier: null,
          service: user.prof,
          etat: 'Enregistré'

    }).then((Response) => {
          console.log(Response);
    });*/

/* // Create an object of formData
const formData = new FormData();
// Update the formData object
formData.append(fileSelected);
// Details of the uploaded file
console.log(this.state.selectedFile);
axios.post("http://localhost:2000/rapport/fichRapport", formData);*/
