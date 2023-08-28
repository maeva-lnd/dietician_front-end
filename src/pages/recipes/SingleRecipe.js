import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import DetailsRecipe from "../../components/recipes/DetailsRecipe";
import { v4 as uuidv4 } from 'uuid';
import ReviewForm from "../../components/review/ReviewForm";
import {useSelector} from 'react-redux';
import Review from "../../components/review/Review";

const SingleRecipe = () => {

    const [recipe, setRecipe] = useState();
    const [reviews, setReviews] = useState();
    const [reload, setReload] = useState(0);

    const params= useParams();
    const firstname = useSelector(state => state.firstname);
    const nav = useNavigate();

    const formatReviews = (reviews) => {
         return Array.isArray(reviews) && reviews.length > 0 ? reviews.map((review) => {
            return <Review
                key={uuidv4()}
                user={review.user.firstname}
                date={review.date}
                note={review.note}
                comment={review.comment}
            />
        }) : ""
    }

    const formatRecipes = (recipe) => {

        setReviews(formatReviews(recipe.reviews));

        return <DetailsRecipe
            key={uuidv4()}
            id={recipe.id}
            picSrc={recipe.picture}
            title={recipe.title}
            description={recipe.description}
            prepTime={recipe.prepTime}
            cookingTime={recipe.cookingTime}
            restTime={recipe.restTime}
            diet={recipe.diets}
            allergy={recipe.allergens}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
        />
    }

    useEffect(() => {
        const baseUrl = "http://127.0.0.1:8000/api/recipe/" + params.id;

        axios.get(baseUrl).then((response) => {
            setRecipe(formatRecipes(response.data));
        }).catch((error) => {
            nav("/notfound");
        })

    }, [reload]);

    return (
        <div>
            {recipe}
            <div className="details-recipe-container">
                <div className="details-recipe-content">
                    <div>
                        <h4 className="b-b">Avis</h4>
                        {reviews}
                    </div>

                    {firstname &&
                        <ReviewForm
                            recipe_id={params.id}
                            reload={reload}
                            setReloadFunc={setReload}
                        />
                    }
                </div>
            </div>
        </div>
    )
};

export default SingleRecipe;