import './Header.css'
import logo from "../img/SmallerLogo.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header-outer header">
            <nav className="nav-container-outer nav-container">
                <a href="/">
                    <img src={logo} className="lg" />
                </a>
                <ul className="navbar">
                    <li className="nav-el">
                        <NavLink exact to="/Aide" className="nav-btn">Aide</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/Propos-de-nous" className="nav-btn">A-propos</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/auth/connect" className="nav-btn">
                            Se connecter
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;