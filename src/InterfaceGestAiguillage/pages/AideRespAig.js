import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../NavGaucheResAig'
import Aide from "../../Aide/Aide"
import "../../Aide/Aide.css"

const AidRespAig = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
    <Aide />
    </div>
    </>
  )
}

export default AidRespAig