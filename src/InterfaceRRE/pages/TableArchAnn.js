import React from 'react'
import Header from '../../InterfaceAdmin/Accessoirs/Header'
import { NavGauchRRE } from '../NavGauchRRE'
import '../../InterfaceAdmin/Accessoirs/Admin.css'
import TabArchAnn  from './VoirArchive/TabArchAnn'
const TableArchAnn = () => {
    return (
        <div>
            <div className='Page-ResAig'>
                <Header />
                <NavGauchRRE />
            </div>
            <div className='middle-content-ResAig'>
                <TabArchAnn />
            </div></div>
    )
}

export default TableArchAnn