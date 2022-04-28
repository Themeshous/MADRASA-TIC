import React from 'react';
import validateReset from './ValidateReset';
import UseReset from './UseReset';
import axios from 'axios';
import '../SignUp/FormLog.css';

const FormReset = ({resetForm}) => {

    const reset = () => {

        axios.post("http://localhost:2000/auth/reset", {
           
            email:value.email,
            password:value.pswd,
            password1:value.pswd1
    
        }).then((Response)=>{
            console.log(Response);
        });
        console.log("chouf M3a el backend");
    
    };

    const {HandleReset, value, HandleChange, errors} = UseReset(resetForm, validateReset);
    return (
        <div className='login-container'>
            <form className='form-login' onSubmit={HandleReset} noValidate>
                <h1>
                    Réinitialiser votre mot de passe
                </h1>
                <div className='form-input-login'>
                    <div className='form-inputs'>
                      <label htmlFor='username' className='form-label'>
                       Votre adresse email
                      </label>
                     <input 
                       id='email'
                       type="email" 
                       name='email'
                       className='form-input'
                       placeholder="Saisir l'adresse email"                      
                       value={value.email}
                       onChange={HandleChange}/>
                       {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Nouveau mot de passe
                        </label>
                        <input
                            type="password"
                            id='pswd'
                            className='form-input'
                            placeholder="Introduisez le nouveau mot de passe"
                            value={value.pswd}
                            onChange={HandleChange} />

                        {errors.pswd && <p>{errors.pswd}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Confirmation mot de passe
                        </label>
                        <input
                            type="password"
                            id='pswd1'
                            className='form-input'
                            placeholder="Confirmer le nouveau mot de passe"
                            value={value.pswd1}
                            onChange={HandleChange} />

                        {errors.pswd1 && <p>{errors.pswd1}</p>}
                    </div>
                    <button className='form-input-btn' type='submit'onClick={reset}>
                        <p> Confirmer </p>
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FormReset