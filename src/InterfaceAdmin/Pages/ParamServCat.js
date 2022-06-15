import React from 'react'
import Header from '../Accessoirs/Header'
import { NavGauche } from '../Accessoirs/NavGauche'
import '../Accessoirs/Admin.css'
import PramSrvCat from './ServCat/PramSrvCat'
const ParamServCat = () => {
  return (
    <>
    <div className='Page-Admin'>
        <Header />
        <NavGauche />
    </div>
    <div className='middle-content'>
        <PramSrvCat/>

    </div>
</>
  )
}

export default ParamServCat