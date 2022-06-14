import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGauchRRE } from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import DetAnn from "./VoirAnnonce/DetAnn"
const DetAnnPg = () => {
  return (
    <div><div className='Page-ResAig'>
    <Header />
    <NavGauchRRE />
</div>
<div className='middle-content-ResAig'>
    <DetAnn/>
</div></div>
  )
}

export default DetAnnPg