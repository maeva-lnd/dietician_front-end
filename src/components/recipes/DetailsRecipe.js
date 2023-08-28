import React from "react";
import './DetailsRecipe.css';
import prep from '../../assets/recipes/icons/preparation.png';
import cuisson from '../../assets/recipes/icons/cuisson.png';
import repos from '../../assets/recipes/icons/repos.png';
import { v4 as uuidv4 } from 'uuid';

const DetailsRecipe = (props) => {

    const parse = require('html-react-parser');

    const dietFormated = Array.isArray(props.diet) && props.diet.length > 0 ? props.diet.map(element => {
        return <span key={uuidv4()}>{element.name}</span>
    }) : ''

    const allergyFormated = Array.isArray(props.allergy) && props.allergy.length > 0 ? props.allergy.map(element => {
        return <span key={uuidv4()}>{element.name}</span>
    }) : ''

    const basePictureUrl =  "http://127.0.0.1:8000/upload/images/recipes/";

    const options = {
        replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.class === 'remove') {
                return <></>;
            }
        },
    };



    // Création d'une fonction permettant de transformer une date en horaire
    const formateHour = (date) => {
        const datetime = new Date(date)
        const hours = datetime.getHours() != 0 ? datetime.getHours() + 'h' : '';
        const minutes = datetime.getMinutes() != 0 ? datetime.getMinutes() + 'min' : '';

        return hours + ' ' + minutes;
    }


    return (
        <div className="details-recipe-container">
            <img className="recipe-img" src={basePictureUrl + props.picSrc}/>
            <div className="details-recipe-content">
                <h3 className="txt-center">{props.title}</h3>
                <p className="p">{props.description}</p>
                <div className="recipe-infos">
                    <div>
                        <img src={prep} alt="Icône de couteau"/>
                        <h5>Préparation</h5>
                        <p>{formateHour(props.prepTime)}</p>
                    </div>
                    <div>
                        <img src={cuisson} alt="Icône d'horloge"/>
                        <h5>Cuisson</h5>
                        <p>{formateHour(props.cookingTime)}</p>
                    </div>
                    <div>
                        <img src={repos} alt="Icône de plat au repos"/>
                        <h5>Repos</h5>
                        <p>{formateHour(props.restTime)}</p>
                    </div>
                </div>
                <h4>Régime(s) alimentaire(s)</h4>
                <div className="diet-area">
                    {dietFormated}
                </div>
                <h4>Allergènes</h4>
                <div className="allergy-area">
                    {allergyFormated}
                </div>
                <h4 className="b-b">Ingrédients</h4>
                <p>{parse(props.ingredients)}</p>
                <h4 className="b-b">Etapes</h4>
                <p>{parse(props.instructions)}</p>
            </div>
        </div>
    )

};

export default DetailsRecipe;