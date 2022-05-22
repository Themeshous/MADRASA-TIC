import React from 'react'
import { ModRap } from './ConsultRapport/ModRap'
import {NavGaucheChefSer} from "../NavGauchChefServ"
import Header from '../../InterfaceAdmin/Accessoirs/Header'
const ModRapServ = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer/>
    </div>
    <div className='middle-content-ResAig'> 
      <ModRap/>
    </div>
    </>
  )
}

export default ModRapServ