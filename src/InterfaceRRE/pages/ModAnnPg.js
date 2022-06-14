import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGauchRRE } from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import ModAnn from "./VoirAnnonce/ModAnn"

const ModAnnPg = () => {
  return (
    <div><div className='Page-ResAig'>
    <Header />
    <NavGauchRRE />
</div>
<div className='middle-content-ResAig'>
    <ModAnn/>
</div></div>
  )
}

export default ModAnnPg