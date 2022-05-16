import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import {NavGaucheResAig } from '../NavGaucheResAig'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import FormParam from '../../Comptes/Settings/FormParam'
const ParamCompREsAIg = () => {

    return (
        <>
            <div className='Page-Admin'>
                <Header />
                <NavGaucheResAig/>
            </div>
            <div className='middle-content'>
                <FormParam />

            </div>
        </>

    )
}
export default ParamCompREsAIg