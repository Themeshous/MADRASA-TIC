import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import {NavGaucheChefSer} from "../NavGauchChefServ"
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import FormParam from '../../Comptes/Settings/FormParam'
const ParamChefSer = () => {

    return (
        <>
            <div className='Page-Admin'>
                <Header />
                <NavGaucheChefSer/>
            </div>
            <div className='middle-content'>
                <FormParam />

            </div>
        </>

    )
}
export default ParamChefSer