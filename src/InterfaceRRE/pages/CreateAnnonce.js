import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import {NavGauchRRE} from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import { AnnonceForm } from './CreateAnn/AnnonceForm'

export const CreateAnnonce = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGauchRRE />
    </div>
    <div className='middle-content-ResAig'> 
      <AnnonceForm/>
    </div>
    </>
  )
}
