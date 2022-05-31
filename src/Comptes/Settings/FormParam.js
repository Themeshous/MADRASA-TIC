import React, { useState, useEffect } from 'react';
import ValidateParam from './ValidateParam';
import '../SignUp/FormLog.css'
import axios from 'axios';

const FormParam = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [values, setvalues] = useState({
        nom: '',
        prenom: '',
        pswd: '',
        pswdn: '',
        pswdc: '',
    });
    const [errors, seterrors] = useState({})
    const [formsucceeded, setformsucceeded] = useState(false)
    const [alertemsg, setalertemsg] = useState(false)
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

    useEffect(() => {
        if ((!(errors.pswd)) && !(errors.pswdc) && !(errors.pswdn)) {
            setformsucceeded(true)


        }
        if ((errors.pswd) || (errors.pswdc) || (errors.pswdn)) {
            setformsucceeded(false)
            setalertemsg(false)
        }
    }, [errors])

    useEffect(() => {
        setInterval(() => { setalertemsg(false) }, 4000)
    }, [])
    console.log(user);
    const executesauvegarder = () => {
        if (formsucceeded && values.pswdn) {   ///après tu rajoute que le mot de passe ancien doit etre = au mot de passe encien introduit
            setalertemsg(true)
            console.log('true on enregistre dans la bdd');
            axios.post("http://localhost:2000/auth/updateUser/"+user.id.toString(), {
                Email:user.email,
                Profession:user.prof,   
                password: values.pswdn,
                password1: values.pswdc,
                NumTel:"0553556677"

            }).then((Response) => {
                console.log(Response);
            });

            //if formucceeded and {values.pswdn} le nouveau mot de passe ==! vide ''
            //modifier le mot de passe de l'utilisateur avec email est {user.email}
            //vers nouveau mot de passe= {values.pswdn} if ce nouveau mot de passe ==! vide ''
            //http://localhost:2000/auth/updateUser/
        }


    }

    return (
        <form className='form-param' onSubmit={HandleSubmit}>
            <h2 className='modification'>Mon Compte </h2>
            <h3 className='titl'>Nom d'utilisateur:</h3>

            <div className='form-inputs'>
                <div className='user-name' >{user.name} {user.name2}</div>
            </div>


            <h3 className='titl'>Informations supplémentaires</h3>
            <div className='form-iput-line-param'>
                <div className='form-inputs'>
                    <label className='form-label-param'>Adresse email</label>
                    <div className='data-displayed ' >{user.email}</div>
                </div>
                <div className='form-inputs'>
                    <label className='form-label-param'>Profession</label>
                    <div className='data-displayed' >{user.prof}</div>
                </div>
                <div className='form-inputs'>
                    <label className='form-label-param'>Role</label>
                    <div className='data-displayed' >{user.roles}</div>
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
            <button type='submit' className='submit-parametre' onClick={executesauvegarder} >
                <p>Sauvegarder</p></button>
            {alertemsg && <div className="alerte-msg">Les modifications ont été bien enregistrés</div>}
        </form>
    )
}
export default FormParam;