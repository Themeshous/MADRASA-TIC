import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'
import { useState } from 'react'
const Header = () => {
  const [showprofil, setshowprofil] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const d = user.name.slice(0, 1).toUpperCase();
  const pathname= "/" + (user.roles.replace(/\s/g, ''))+"/Profile"
  return (
    <>
      <nav className='Header-for-interface'>
        <div className='nav-container'>
          <div className="nav-elem" >
            <div className="prfl">
              <p className='profile-letters'>{d}</p>
            </div>
          </div>
          <div className="nav-elem" >
            <div className='elem' onClick={() => setshowprofil(showprofil => !showprofil)}>
              <p> {user.name}     {user.name2}</p>
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
                <div className="prfl-m">
                  <p className='profile-letters'>{d}</p>
                </div>
                <p> {user.name}     {user.name2}</p>
              </div>
              <div className='profile'>
                <FontAwesomeIcon icon={faUserCog} className="icon-profil-menu" />
                <a href={pathname}>Mon Compte</a>
              </div>

              <div className='log-out' >
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
// 