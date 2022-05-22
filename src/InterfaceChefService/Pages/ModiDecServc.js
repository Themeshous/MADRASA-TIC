import React from 'react'
import {NavGaucheChefSer} from "../NavGauchChefServ"
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import { ModDecServ } from './ConDecServ/ModDecServ'

const ModiDecServc = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer />
    </div>
    <div className='middle-content-ResAig'> 
      <ModDecServ/>
    </div>
    </>
  )
}

export default ModiDecServc