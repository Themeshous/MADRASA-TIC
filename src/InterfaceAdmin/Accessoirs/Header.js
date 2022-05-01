import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell ,faCaretDown,faUserCog ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import profile from '../../img/img-2.png'
import './Admin.css'
import { useState } from 'react'
const Header = () => {
  const [showprofil, setshowprofil] = useState(false)
  return (
    <>
    <nav className='Header-for-interface'>
        <div className='nav-container'>
        
                    <div className="nav-elem" >
                               <FontAwesomeIcon icon={faBell} className="icon" />
                    </div>
                          <div className="nav-elem" >
                              <img src={profile}   className="prfl" />                    
                          </div>
                     <div className="nav-elem" >
                          <div className='elem' onClick={() => setshowprofil(showprofil => !showprofil)}>       
                               <p> Nom Prénom </p>
                               <FontAwesomeIcon icon={faCaretDown} className="icon" />
                          </div>
                    </div>
                  
        </div>
    </nav> 
    <div className='profil-menu'>
       {
          showprofil && (
          <div className='profil-content'>
                   <div className='profil-info'>
                       <img src={profile}   className="prfl" /> 
                       <p> Nom et prénom </p>
                   </div>   
                    <div className='profile'>
                           <FontAwesomeIcon icon={faUserCog} className="icon-profil-menu" />   
                           <a href='/Admin/Profile'>Mon Compte</a>
                    </div>
              
                <div className='log-out'>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon-profil-menu" />   
                           <a href='/auth/Connect'>Se déconnecter</a>
                </div>

          </div>
          )
       }
     </div>
     </>
  )
}

export default Header