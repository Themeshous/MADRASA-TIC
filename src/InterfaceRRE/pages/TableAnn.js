import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGauchRRE } from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import TabAnn  from './VoirAnnonce/TabAnn'
const TableAnn = () => {
  return (
    <div>
            <div className='Page-ResAig'>
                <Header />
                <NavGauchRRE />
            </div>
            <div className='middle-content-ResAig'>
                <TabAnn/>
            </div></div>
  )
}

export default TableAnn