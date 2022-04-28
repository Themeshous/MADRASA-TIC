import React from 'react'
import Header from '../../Accessoirs/Header'
import { NavGauche } from '../../Accessoirs/NavGauche'
import '../../Accessoirs/Admin.css'
import { TableComptes } from './TableComptes'
const ConsulterComptes = () => {

  return (
    <>
    <div className='Page-Admin'>
       <Header/>
       <NavGauche />
    </div>
    <div className='middle-content'> 
      <TableComptes/>     
    </div>
    </>
    
  )
}

export default ConsulterComptes