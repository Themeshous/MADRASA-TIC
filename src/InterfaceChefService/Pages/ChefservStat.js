import React from 'react'
import StatServ from "./statchefserv/StatServ.js"
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheChefSer } from '../NavGauchChefServ'
import '../../InterfaceAdmin/Accessoirs/Admin.css'

const ChefservStat = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer />
    </div>
    <div className='middle-content-ResAig'> 
      <StatServ/>
    </div>
    </>
  )
}

export default ChefservStat

