import React from 'react'
import './Admin.css'
import Logo from '../../img/SmallerLogo.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faChartPie, faCircleExclamation,  faSliders, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'   
   
const user = JSON.parse(localStorage.getItem("user"));
export const NavGauche = () => {
  return (
       <>
     
    <div className='left-nav-container'>
         <div className='logo-container'>
             <a href="/">
                <img src={Logo}  className="lg" alt='Logo' />
             </a>
        </div>
         <div className="left-elements">
              
            
                    <NavLink  to="/administrateur"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                               <FontAwesomeIcon icon={faUserPlus} className="icon-left" />
                               <p>Créer un compte</p> 
                    </NavLink>
                 
          
        
                    
                    <NavLink  to="/Admin/ConsulterComptes"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faSliders} className="icon-left" />
                               <p>Consulter les comptes</p>
                    </NavLink>
   
           
                    
                    <NavLink  to="/Admin/notification"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                             <FontAwesomeIcon icon={faBell} className="icon-left" /> 
                            <p>Notifications</p> 
                    </NavLink>
          
       
                   
                   <NavLink  to="/Admin/statistiques"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                           <FontAwesomeIcon icon={faChartPie} className="icon-left" />   
                           <p>Statistiques</p>
                    </NavLink>
         
        </div>
        <div className="left-elements">
         
                    
                    <NavLink  to="/aide"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faCircleExclamation} className="icon-left" />
                               <p>Aide</p>
                    </NavLink>
   
        </div>
   
   
  </div> 
  </>
  )
}