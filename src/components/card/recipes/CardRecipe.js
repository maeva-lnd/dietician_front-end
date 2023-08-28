import React from "react";
import './CardRecipe.css';
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const CardRecipe = (props) => {

    const dietFormated = Array.isArray(props.diet) && props.diet.length > 0 ? props.diet.map(element => {
        return <span key={uuidv4()}>{element.name}</span>
    }) : ''

    const allergyFormated = Array.isArray(props.allergy) && props.allergy.length > 0 ? props.allergy.map(element => {
        return <span key={uuidv4()}>{element.name}</span>
    }) : ''

    const basePictureUrl =  "http://127.0.0.1:8000/upload/images/recipes/";


    return (
        <div className="card-recipe">
            <img src={basePictureUrl + props.picSrc}/>
            <div className="card-content-recipe">
                <h3 className="txt-center">{props.title}</h3>
                <p>{props.description}</p>
                <h4>Régime(s) alimentaire(s)</h4>
                <div className="diet-area">
                    {dietFormated}
                </div>
                <h4>Allergènes</h4>
                <div className="allergy-area">
                    {allergyFormated}
                </div>
            </div>
            <div className="btn-recipe">
                <Link className="btn" to={`/recette/${props.id}`}>Voir la recette</Link>
            </div>
        </div>
    )
};

export default CardRecipe;