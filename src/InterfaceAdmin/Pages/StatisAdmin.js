import React from 'react'
import Header from '../Accessoirs/Header'
import { NavGauche } from '../Accessoirs/NavGauche'
import '../Accessoirs/Admin.css'
import DoughnutChart from "../Pages/Statistiques/DonutChart"
const StatisAdmin= () => {

    return (
        <>
            <div className='Page-Admin'>
                <Header />
                <NavGauche />
            </div>
            <div className='middle-content'>
              <DoughnutChart/>

            </div>
        </>

    )
}
export default StatisAdmin