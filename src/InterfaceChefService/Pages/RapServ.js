import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheChefSer } from '../NavGauchChefServ'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import DetRapServ from './ConsultRapport/DetRapServ'
const RapServ = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer />
    </div>
    <div className='middle-content-ResAig'> 
      <DetRapServ/>
    </div>
    </>
  )
}

export default RapServ