import React from 'react'
import FormParam from '../../Comptes/Settings/FormParam'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import {NavGauchRRE} from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'

const ProfileRRE = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGauchRRE />
    </div>
    <div className='middle-content-ResAig'> 
    <FormParam />
    </div>
    </>
  )
}

export default ProfileRRE