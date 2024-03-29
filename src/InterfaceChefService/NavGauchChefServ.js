import React from 'react'
import '../InterfaceAdmin/Accessoirs/Admin.css'
import Logo from '../img/SmallerLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartPie, faCircleExclamation, faFileCirclePlus, faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export const NavGaucheChefSer = () => {
   return (
      <>

         <div className='left-nav-container'>
            <div className='logo-container'>
               <a href="/">
                  <img src={Logo} className="lg" alt='Logo' />
               </a>
            </div>
            <div className="left-elements">


               <NavLink to="/chefdeservice"
                  className={(navData) => (navData.isActive ? 'active' : 'link')}>
                  <FontAwesomeIcon icon={faFileCirclePlus} className="icon-left" />
                  <p>Voir les déclarations</p>
               </NavLink>

               <NavLink to="/chefserv/Archive"
                  className={(navData) => (navData.isActive ? 'active' : 'link')}>
                  <FontAwesomeIcon icon={faFileCircleExclamation} className="icon-left" />
                  <p>Consulter l'archive</p>
               </NavLink>

               <NavLink to="/ChefSer/statistiques"
                  className={(navData) => (navData.isActive ? 'active' : 'link')}>
                  <FontAwesomeIcon icon={faChartPie} className="icon-left" />
                  <p>Statistiques</p>
               </NavLink>

            </div>
            <div className="left-elements">


               <NavLink to="/chefserv/Aide"
                  className={(navData) => (navData.isActive ? 'active' : 'link')}>
                  <FontAwesomeIcon icon={faCircleExclamation} className="icon-left" />
                  <p>Aide</p>
               </NavLink>

            </div>


         </div>
      </>
   )
}