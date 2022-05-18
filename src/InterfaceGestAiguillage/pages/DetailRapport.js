import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../NavGaucheResAig'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import DetRapp from "./ConsulterRapports/DetRapp"
const DetailRapport = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
      <DetRapp/>
    </div>
    </>
  )
}

export default DetailRapport