import React from 'react'
import Header from '../Accessoirs/Header'
import { NavGauche } from '../Accessoirs/NavGauche'
import '../Accessoirs/Admin.css'
import FormCreat from '../../Comptes/SignUp/FormCreat'
const CreateComp = () => {

  return (
    <>
    <div className='Page-Admin'>
       <Header/>
       <NavGauche />
    </div>
    <div className='middle-content'> 
      <FormCreat/>
    </div>
    </>
    
  )
}

export default CreateComp