import React from 'react'
import validateForget from './ValidateForget'
import UseForget from './UseForget'
import '../SignUp/FormLog.css'

const FormForget = ({forgetForm}) => {

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
               
                    <button className='form-input-forget-btn' type='submit'>
                        <p> Envoyer le lien </p>
                    </button>
                </div>
            </form>
        </div>

    )
}

export default FormForget  

/*  <div className='forgot-pswd' >
                        <a href='/Connect'>
                            Vous avez déja un compte?
                        </a>
                    </div> */