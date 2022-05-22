import React from 'react'
import { CreerRapp } from "./FormRapport"
import {NavGaucheChefSer} from "../../NavGauchChefServ"
import Header from '../../../InterfaceAdmin/Accessoirs/Header'
const CreateRap = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheChefSer/>
    </div>
    <div className='middle-content-ResAig'> 
      <CreerRapp/>
    </div>
    </>
  )
}

export default CreateRap