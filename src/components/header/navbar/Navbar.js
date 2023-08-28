import React, {useState, useEffect} from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {useSelector} from 'react-redux';
import burgerBar from '../../../assets/toggle/burger-bar.jpg';
import closeIcon from '../../../assets/toggle/close.jpg';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const firstname = useSelector(state => state.firstname);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 1200) && (
                <div className="navlinks">
                    <NavLink to="/" onClick={toggleNav} className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
                    <NavLink to="/recettes" onClick={toggleNav} className={(nav) => (nav.isActive ? "nav-active" : "")}>Idées recettes</NavLink>
                    <NavLink to="/contact" onClick={toggleNav} className={(nav) => (nav.isActive ? "nav-active" : "")}>Contact</NavLink>
                    {!firstname && <NavLink to="/connexion" onClick={toggleNav} className={(nav) => (nav.isActive ? "nav-active" : "")}>Espace patients</NavLink>}
                    {firstname && <NavLink onClick={toggleNav} to="/deconnexion" >Se déconnecter</NavLink>}
                </div>
            )}

            <div className="toggle">
                {!toggleMenu && (
                    <img onClick={toggleNav} src={burgerBar} className="burger-bar" alt="Icône de menu"/>
                )}
                {toggleMenu && (
                    <img onClick={toggleNav} src={closeIcon} className="close-icon" alt="Icône de fermeture"/>
                )}
            </div>

        </nav>
    )

};

export default Navbar;