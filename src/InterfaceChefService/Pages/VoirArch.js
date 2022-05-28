import React from 'react'
import {NavGaucheChefSer} from "../NavGauchChefServ"
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import TabArchRap from './ConsArchRapp/TabArchRap'
export const VoirArch = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer />
    </div>
    <div className='middle-content-ResAig'> 
      <TabArchRap/>
    </div>
    </>
  )
}
