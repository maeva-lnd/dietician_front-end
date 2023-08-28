import React from "react";
import './Home.css';
import sandrineCoupart from '../../assets/home/s-coupart.jpeg';
import vegetablesPic from '../../assets/home/vegetables.png'
import CardService from "../../components/card/services/CardService";
import pic1 from "../../assets/home/consultation.jpeg";
import pic2 from "../../assets/home/atelier.jpeg";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>

            <section id="slider">
                <h1>
                    Sandrine Coupart <br/>
                    Diététicienne-Nutritionniste
                </h1>
                <Link className="btn" to="https://www.doctolib.fr/">Prendre rdv</Link>
            </section>

            <section className="about-section container">
                <img className="sc-picture" src={sandrineCoupart} alt="Mme Coupart Sandrine, diététicienne-nutritionniste"/>
                <div className="content">
                    <h2>A propos</h2>
                    <p>
                        Je suis Sandrine Coupart, diplômée de l'Université de Caen en tant que diététicienne-nutritionniste,
                        mais également titulaire du Diplôme Universitaire en Alimentation Santé et Micronutrition. <br/><br/>
                        Mon objectif premier est de vous aider à améliorer votre qualité de vie, à travers des conseils
                        personnalisés, tout en respectant une alimentation gourmande, adaptée à votre profil et à votre quotidien. <br/><br/>
                        Mon approche de la nutrition est bienveillante, douce et pédagogique. Mes consultations s'adressent
                        à tous : que vous souhaitiez adapter votre alimentation à votre pathologie, une allergie, une
                        intolérance, un choix de vie ; que vous souhaitiez améliorer vos performances sportives, votre poids,
                        votre bilan sanguin, votre confort digestif ; ou que vous souhaitiez simplement prendre soin de vous,
                        de vos proches et de votre santé. <br/><br/>
                        J'adore manger, et vous ?
                    </p>
                    <div className="btn-about">
                        <Link className="btn" to="/recettes">Voir mes recettes</Link>
                    </div>
                </div>
            </section>

            <section className="quote">
                <q>Un esprit sain dans un corps sain</q>
                <img className="vegetables-pic" src={vegetablesPic} alt="Image représentant des légumes"/>
            </section>

            <section className="services-section container">
                <h2>Mes services</h2>
                <div className="card-service">
                    <CardService
                        picSrc={pic1}
                        picAlt="Consultations diététiques"
                        title="Consultations"
                        text="Au cabinet ou en télé-consultation, nous faisons le point sur votre santé, votre alimentation,
                     vos objectifs, vos interrogations, etc..."
                    />
                    <CardService
                        picSrc={pic2}
                        picAlt="Ateliers sur la nutrition"
                        title="Ateliers de prévention et d'information sur la nutrition"
                        text="Pour les particuliers, les associations, les entreprises.
                    Animations d'information ou de prévention en milieu scolaire ainsi que les collectivités"
                    />
                </div>
                <div className="btn-service">
                    <Link to="https://www.doctolib.fr/" className="btn btn-recipes">Prendre rdv</Link>
                </div>
            </section>
        </div>
    )

};

export default Home;