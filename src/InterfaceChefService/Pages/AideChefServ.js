import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheChefSer } from '../NavGauchChefServ'
import Aide from "../../Aide/Aide"

import "../../Aide/Aide.css"

const AideChefServ = () => {
    return (
        <>
        <div className='Page-ResAig'>
           <Header/>
           <NavGaucheChefSer/>
        </div>
        <div className='middle-content-ResAig'> 
        <Aide />
        </div>
        </>
    )    
}

export default AideChefServ