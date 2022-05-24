import './Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify as fa } from '@fortawesome/free-solid-svg-icons'
import logo from "../img/SmallerLogo.png"
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <a href="/">
                <img src={logo}  className="lg" />
                </a>
                <ul className="navbar">
                    <li className="nav-el">
                        <NavLink exact to="/4" className="nav-btn">Nos services</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/4" className="nav-btn">Comment ça marche</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/aide" className="nav-btn">Aide</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/auth/connect" className="nav-btn">
                            Log In
                        </NavLink>


                    </li>
                    <li className="check">
                        <FontAwesomeIcon icon={fa} className="fa" />
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default Header;