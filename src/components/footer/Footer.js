import React from "react";
import './Footer.css';
import logo from '../../assets/logo/dark-logo.jpg'
import {Link} from "react-router-dom";
import facebook from '../../assets/socials/facebook.png'
import instagram from '../../assets/socials/instagram.png';

const Footer = () => {
    return (
        <footer className="full">
            <div className="container">
                <div id="footer">
                    <Link to="/" className="dark-logo">
                        <img src={logo} alt='Sandrine Coupart, diététicienne-nutritionniste'/>
                    </Link>

                    <div>
                        <h4>Mes coordonnées</h4>
                        <p>
                            Cabinet Sandrine Coupart, <br/>
                            diététicienne-nutritionniste <br/><br/>
                            60 rue Benoit, 14000 Caen <br/><br/>
                            0776765432<br/>
                            sandrinecoupart@gmail.com
                        </p>
                    </div>


                    <div>
                        <h4>Mes réseaux sociaux</h4>
                        <div className="socials-links">
                            <Link to="#">
                                <img className="social-icon" src={facebook} alt="Icône facebook"/>
                            </Link>
                            <Link to="#">
                                <img className="social-icon" src={instagram} alt="Icône instagram"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="legal-information">
                    <div className="legal-links">
                        <Link to="mentionslegales">Mentions légales</Link>
                        <Link to="politiquedeconfidentialite">Politique de confidentialité</Link>
                    </div>

                    <p id="copyright">© Copyright 2023 Sandrine Coupart</p>
                </div>


            </div>
        </footer>
    )

};

export default Footer;