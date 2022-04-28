import React from 'react'
import validateForget from './ValidateForget'
import UseForget from './UseForget'
import axios from 'axios';
import '../SignUp/FormLog.css'

const FormForget = ({forgetForm}) => {
    const forget = () => {

        axios.post("http://localhost:2000/auth/forget", {
           
            email:email,
    
        }).then((Response)=>{
            console.log(Response);
        });
        
    
    };

    const {HandleForget, email, HandleChange, errors} = UseForget(forgetForm, validateForget);
    return (
        <div className='login-container'>
            <form className='form-login' onSubmit={HandleForget} noValidate >
                <h1>
                    Mot de passe oublié
                </h1>
                <div className='form-input-login'>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Adresse email
                        </label>
                        <input
                            id='email'
                            type="email"
                            name='email'
                            className='form-input'
                            placeholder="Saisir l'adresse email"
                            value={email}
                            onChange={HandleChange} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
               
                    <button className='form-input-forget-btn' type='submit'onClick={forget}>
                        <p> Envoyer le lien </p>
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FormForget  