import React from "react";
import logo from '../../assets/logo/light-logo.jpg'
import {Link} from "react-router-dom";
import './Header.css';
import Navbar from "./navbar/Navbar";


const Header = () => {
    return (

        <header className="full">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt='Sandrine Coupart, diététicienne-nutritionniste' className="logo"/>
                </Link>
                <Navbar />
            </div>
        </header>
    )
};

export default Header;