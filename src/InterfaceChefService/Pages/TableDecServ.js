import React from 'react'
import {NavGaucheChefSer} from "../NavGauchChefServ"
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import { TabDecServ } from './ConDecServ/TabDecServ'

const TableDecServ = () => {

  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer />
    </div>
    <div className='middle-content-ResAig'> 
      <TabDecServ/>
    </div>
    </>
    
  )
}

export default TableDecServ