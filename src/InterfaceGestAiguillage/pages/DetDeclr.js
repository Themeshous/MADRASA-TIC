import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGaucheResAig } from '../NavGaucheResAig'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import {Edit} from "./TableauDeclarations/Editdeclr"

const DetDeclr = () => {
  return (
    <>
    <div className='Page-ResAig'>
       <Header/>
       <NavGaucheResAig />
    </div>
    <div className='middle-content-ResAig'> 
      <Edit/>
    </div>
    </>
  )
}

export default DetDeclr