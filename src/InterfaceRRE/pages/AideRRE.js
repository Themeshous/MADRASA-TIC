import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import {NavGauchRRE} from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import Aide from "../../Aide/Aide"
import "../../Aide/Aide.css"

export const AideRRE = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGauchRRE />
    </div>
    <div className='middle-content-ResAig'> 
    <Aide />
    </div>
    </>
  )
}