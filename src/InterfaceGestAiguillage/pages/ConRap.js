import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../NavGaucheResAig'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import {TabRapports} from "../pages/ConsulterRapports/TabRapport"

const ConsulterRapports = () => {

  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
      <TabRapports/>
    </div>
    </>
    
  )
}

export default ConsulterRapports