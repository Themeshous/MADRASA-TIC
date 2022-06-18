import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGauchRRE } from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import Statrespre from './StatistiquesRRE/Statrespre'

const StatRre = () => {
  return (
    <div>
            <div className='Page-ResAig'>
                <Header />
                <NavGauchRRE />
            </div>
            <div className='middle-content-ResAig'>
                <Statrespre/>
            </div></div>
  )
}

export default StatRre