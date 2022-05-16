import React, { useState } from 'react';
import ValidateParam from './ValidateParam';
import '../SignUp/FormLog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FormParam = () => {
    const [values, setvalues] = useState({
        nom: '',
        prenom: '',
        pswd: '',
        pswdn: '',
        pswdc: '',
    });
    const [errors, seterrors] = useState({})
    const [fileSelected, setfileSelected] = useState(null);

    const HandleChange = e => {
        const { name, value } = e.target
        setvalues({
            ...values,
            [name]: value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault();
        seterrors(ValidateParam(values));
    }

    const SelectFile = e => {
        setfileSelected(e.target.files[0])
    }
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <form className='form-param' onSubmit={HandleSubmit}>
            <h2 className='modification'>Mon Compte </h2>
            <div className='form-inputs' >
                <h3 className='titl'>Photo de profile</h3>
                <label className='form-label-param'>Ajouter une nouvelle photo de profil</label>
                <div className='file-card'>
                    <div className='file-inputs'>
                        <input
                            type="file"
                            className='profil-pic'
                            onChange={SelectFile}
                        />
                        <button className='Upload-button'>
                            <i>
                                <FontAwesomeIcon icon={faPlus} />
                            </i>
                            Upload
                        </button>
                    </div>
                    <p className="main">fichiers supportés</p>
                    <p className="info">JPG, PNG</p>
                </div>
            </div>
            <h3 className='titl'>Modifier le nom d'utilisateur:</h3>
            <div className='form-iput-line-param'>
                <div className='form-inputs' >

                    <label className='form-label-param'>Saisissez un nouveau nom</label>
                    <input id="Name" type="text"
                        name="nom"
                        value={values.nom}
                        placeholder={user.name}
                        onChange={HandleChange}
                        className='input-parametre'
                    />
                    {errors.nom && <p>{errors.nom}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label-param'>Saisissez un nouveau prénom</label>
                    <div >
                        <input id="prenom" type="text"
                            name="prenom"
                            value={values.prenom}
                            placeholder={user.name2}
                            onChange={HandleChange}
                            className='input-parametre' />
                    </div>
                    {errors.prenom && <p>{errors.prenom}</p>}
                </div>
            </div>
            <h3 className='titl'>Modifier le mot de passe</h3>
            <div className='form-iput-line-param'>
                <div className='form-inputs'>

                    <label className='form-label-param'>Ancien mot de passe</label>
                    <input
                        name='pswd'
                        id="pass" type="password"
                        value={values.pswd}
                        onChange={HandleChange}
                        className='input-parametre'
                        placeholder='mot de passe actuel' />
                    {errors.pswd && <p>{errors.pswd}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label-param'>Nouveau mot de passe</label>
                    <input
                        name='pswdn'
                        id="pass2" type="password"
                        value={values.pswdn}
                        onChange={HandleChange}
                        className='input-parametre'
                        placeholder='nouveau mot de passe' />
                    {errors.pswdn && <p>{errors.pswdn}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label-param'>Confirmer le nouveau mot de passe</label>
                    <input
                        name='pswdc'
                        id="pass3" type="password"
                        value={values.pswdc}
                        onChange={HandleChange}
                        className='input-parametre'
                        placeholder='Confirmer nouveau mot de passe' />
                    {errors.pswdc && <p>{errors.pswdc}</p>}
                </div>
            </div>
            <button type='submit' className='form-input-btn-par' >
                <p>Sauvegarder</p></button>

        </form>
    )
}
export default FormParam;