import React from 'react'
import UseLogin from './UseLogin'
import ValidateLog from './ValidateLog'
import '../SignUp/FormLog.css'
import axios from 'axios';
import { useState } from 'react';



const FormLogIn = ({connectForm}) => {

  const [email,setemail] = useState("");
  const [pswd,setpswd] = useState("");

  const login = () => {
    axios.post("http://localhost:2000/login", {
        email:val.email,
        password:val.pswd,

    }).then((errors)=>{
        console.log(errors);
    });

};

    const {handlechange,val,HandleConnect,errors}=UseLogin(connectForm,ValidateLog);
    return (
    <div className='login-container'>
        <form className='form-login' onSubmit={HandleConnect} noValidate >
           <h1>
             Se connecter à votre compte MADRASA-TIC
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
                       value={val.email}
                       onChange={handlechange}/>
               
               {errors.email && <p>{errors.email}</p>}
           </div>
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                Mot de passe 
                </label> 
                <input 
                       id='pswd'
                       type="password" 
                       name='pswd'
                       className='form-input'
                       placeholder='introduisez votre mot de passe'
                       value={val.pswd}
                       onChange={handlechange}/>
               
               {errors.pswd && <p>{errors.pswd}</p>}
           </div> 
           <div className='forgot-pswd' >
             <a href='/Reset'>
              Avez vous oublié votre mot de pase ?
             </a>
             
           </div>
           
           <button className='form-input-btn' type='submit'onClick={login}>
           <strong> Connecter </strong>
           </button> 
            </div>
       </form>
    </div> 
  )
}

export default FormLogIn