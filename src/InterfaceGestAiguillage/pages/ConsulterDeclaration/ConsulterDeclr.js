import React from 'react'
import Header from '../../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../../NavGaucheResAig'
import '../../../InterfaceAdmin/Accessoirs/Admin.css'
import {TableDeclr} from "../TableauDeclarations/TableDeclr"

const ConsulterDeclr = () => {

  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
      <TableDeclr/>
    </div>
    </>
    
  )
}

export default ConsulterDeclr