import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheChefSer } from '../NavGauchChefServ'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import TabRapServ from "./ConsultRapport/TabRapServ"

const ConsRapServ = () => {
    return (
        <>
        <div className='Page-ResAig'>
           <Header/>
           <NavGaucheChefSer/>
        </div>
        <div className='middle-content-ResAig'> 
          <TabRapServ/>
        </div>
        </>
    )    
}

export default ConsRapServ