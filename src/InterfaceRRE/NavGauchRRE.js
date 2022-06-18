import React from 'react'
import '../InterfaceAdmin/Accessoirs/Admin.css'
import Logo from '../img/SmallerLogo.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faChartPie, faCircleExclamation,  faSliders, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'   
   
//const user = JSON.parse(localStorage.getItem("user"));
export const NavGauchRRE = () => {
  return (
       <>
     
    <div className='left-nav-container'>
         <div className='logo-container'>
             <a href="/">
                <img src={Logo}  className="lg" alt='Logo' />
             </a>
        </div>
         <div className="left-elements">
              
            
                    <NavLink  to="/responsabledesRE"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                               <FontAwesomeIcon icon={faUserPlus} className="icon-left" />
                               <p>Créer une annonce</p> 
                    </NavLink>
                 
          
        
                    
                    <NavLink  to="/RRE/Consulter"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faSliders} className="icon-left" />
                               <p>Consulter les annonces</p>
                    </NavLink>
   
           
                    <NavLink  to="/RRE/archive"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faSliders} className="icon-left" />
                               <p>Consulter l'archive</p>
                    </NavLink>       
       
                   
                   <NavLink  to="/RRE/statistiques"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                           <FontAwesomeIcon icon={faChartPie} className="icon-left" />   
                           <p>Statistiques</p>
                    </NavLink>
         
        </div>
        <div className="left-elements">
         
                    
                    <NavLink  to="/RRE/aide"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faCircleExclamation} className="icon-left" />
                               <p>Aide</p>
                    </NavLink>
   
        </div>
   
   
  </div> 
  </>
  )
}