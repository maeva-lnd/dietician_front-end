import React, {useState, useEffect} from "react";
import axios from "axios";
import './Recipes.css'
import CardRecipe from "../../components/card/recipes/CardRecipe";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux';

const Recipes = () => {

    const [recipes, setRecipes] = useState();
    const firstname = useSelector(state => state.firstname);
    const token = useSelector(state => state.token);

    useEffect(() => {
        const baseUrl = "http://127.0.0.1:8000/api/recipes";
        const config = firstname == undefined
            ? {}
            : {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    "Authorization": "bearer " + token,
                }
            };

        axios.get(baseUrl, config).then((response) => {
            setRecipes(
                response.data.map((recipe) => {
                    return <CardRecipe
                        key={uuidv4()}
                        id={recipe.id}
                        picSrc={recipe.picture}
                        title={recipe.title}
                        description={recipe.description}
                        diet={recipe.diets}
                        allergy={recipe.allergens}
                    />
                })
            )
        })

    }, []);


    return (
        <div className="container-recipes">
            <h1 className="txt-center pt40">Mes idées recettes</h1>
            <p className="txt-center">
                Vous retrouverez ici les recettes que j'élabore pour vous.
                Elles sont diététiques tout en restant bien évidemment gourmandes. <br/><br/>
                Pour mes patients, des recettes supplémentaires sont disponibles. N'hésitez pas à vous connecter pour les voir.
            </p>
            <div className="btn-login">
                {!firstname && <Link className="btn" to="/connexion">Se connecter</Link>}
            </div>
            <div className="card-recipe-desktop">
                {recipes}
            </div>
        </div>
    )

};

export default Recipes;