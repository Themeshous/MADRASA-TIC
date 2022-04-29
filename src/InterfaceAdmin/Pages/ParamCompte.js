import React from 'react'
import Header from '../Accessoirs/Header'
import { NavGauche } from '../Accessoirs/NavGauche'
import '../Accessoirs/Admin.css'
import FormParam from '../../Comptes/Settings/FormParam'
const ParamComp = () => {

    return (
        <>
            <div className='Page-Admin'>
                <Header />
                <NavGauche />
            </div>
            <div className='middle-content'>
                <FormParam />

            </div>
        </>

    )
}
export default ParamComp