import React from 'react'
import Header from '../../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../../NavGaucheResAig'
import '../../../InterfaceAdmin/Accessoirs/Admin.css'
export const Edit = () => {
  return (
        <>
        <div className='Page-ResAig'>
           <Header/>
           <NavGaucheResAig />
        </div>
        <div className='middle-content-ResAig'> 
        voila les information sur la déclaration 
        </div>
        </>
        
  )
}
