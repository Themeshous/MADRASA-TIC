import React from 'react'
import Header from '../../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../../NavGaucheResAig'
import '../../../InterfaceAdmin/Accessoirs/Admin.css'

const ConsulterDeclr = () => {

  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
      <h1>Bien venu dans l'interface cher responsable d'aiguillage!!</h1>
    </div>
    </>
    
  )
}

export default ConsulterDeclr