import React from 'react'
import UseForm from './UseForm'
import ValidateInfo from './ValidateInfo';
import './FormLog.css';
import axios from 'axios';
import { useState } from 'react';

const FormSignup = ({submitForm}) => {


const signup = () => {

    axios.post("http://localhost:2000/admin/create", {
        nom:values.nom,
        prenom:values.prenom,
        email:values.email,
        numero:"0555 55 77 88",
        role:values.role,
        profession:values.profession,
        password:values.pswd,
        password1:values.pswd1

    }).then((Response)=>{
        console.log(Response);
    });

};

    const {handlechange,values,HandleSubmit,errors}=UseForm(submitForm,ValidateInfo);
    return (
   <div className='form-content-right'>
       <form className='form-signup' onSubmit={HandleSubmit} noValidate>
           <h1>
               Créez un nouveau compte en remplissant ce formulaire !!
           </h1>
           <div className='form-iput-line'>
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                 Nom
               </label>
               <input  
                       id='nom'
                       type="text" 
                       name='nom'
                       className='form-input'
                       placeholder='Saisir le nom'
                       value={values.nom}
                       onChange={handlechange}/>
              
               {errors.nom && <p>{errors.nom}</p>}
           </div>

           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                    Prénom
                </label>    
                <input  
                       id='prenom'
                       type="text" 
                       name='prenom'
                       className='form-input'
                       placeholder='Saisir le prénom'
                       value={values.prenom}
                       onChange={handlechange}/>
              
               {errors.prenom && <p>{errors.prenom}</p>}
           </div>
           </div>
           <div className='form-iput-line-email'>
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                Adresse email
                </label>
                <input 
                       id='email'
                       type="email" 
                       name='email'
                       className='form-input'
                       placeholder="Saisir l'adresse email"                       value={values.email}
                       onChange={handlechange}/>
               
               {errors.email && <p>{errors.email}</p>}
           </div>
           </div>
           <div className='form-iput-line'>
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                   Rôle
                </label>
                <select   id='role'
                          type="text" 
                          name='role'
                          className='form-input'
                          value={values.role}
                          onChange={handlechange}>
                           <option value="Choisir un rôle" selected> Choisir un rôle</option>
                           <option value="administrateur-secondaire">administrateur-secondaire</option>
                           <option value="responsable d'aiguillage">responsable d'aiguillage</option>
                           <option value="responsable des relations extérieures">responsable des relations extérieures</option>
                           <option value="chef de service">chef de service</option>
             </select>  
               {errors.role && <p>{errors.role}</p>}
           </div>
            
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                  Profession
                </label> 
                <select    id='profession'
                           type="text" 
                           name='profession'
                           className='form-input'
                           placeholder='Choisir une profession'
                           value={values.profession}
                           onChange={handlechange}>
                           <option value="Choisir une profession" selected> Choisir une profession</option>
                           <option value="directeur">directeur</option>
                           <option value="directeur-adjoint">directeur-adjoint</option>
                           <option value="SG">SG</option>
                           <option value="médecin de l'école">médecin de l'école</option>
                           <option value="simple emplyée">simple emplyé</option>
                           <option value="simple emplyée">sécurité</option>
                           <option value="simple emplyée">hygiène</option>
                           <option value="simple emplyée">entretien</option>
               </select> 
               {errors.profession && <p>{errors.profession}</p>}
           </div>
</div>
<div className='form-iput-line'>
           <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                Mot de passe 
                </label> 
                <input 
                       id='pswd'
                       type="password" 
                       name='pswd'
                       className='form-input'
                       placeholder='introduire un mot de passe'
                       value={values.pswd}
                       onChange={handlechange}/>
               
               {errors.pswd && <p>{errors.pswd}</p>}
           </div> 
            <div className='form-inputs'>
               <label htmlFor='username' className='form-label'>
                   Comfirmation du mot de passe 
                   </label> 
                   <input 
                       id='pswd1'
                       type="password" 
                       name='pswd1'
                       className='form-input'
                       placeholder='Comfirmer le mot de passe'
                       value={values.pswd1}
                       onChange={handlechange}/>
            
               {errors.pswd1 && <p>{errors.pswd1}</p>}
           </div>
</div>
         
         
          
           <button className='form-input-btn' type='submit' onClick={signup}>
           <p> Créer le compte  </p>
           </button>
        
       </form>
   </div>
  )
}

export default FormSignup