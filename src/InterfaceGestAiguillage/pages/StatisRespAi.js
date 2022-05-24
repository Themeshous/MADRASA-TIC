import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../NavGaucheResAig'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import BarCharAiguillage from './StatisAiguillage/BarCharAiguillage'
const StatisRespAi= () => {

    return (
      <>
      <div className='Page-ResAig'>
         <Header/>
         <NavGaucheResAig />
      </div>
      <div className='middle-content-ResAig'> 
       <BarCharAiguillage/>
      </div>
      </>
      
    )
  }
  export default StatisRespAi