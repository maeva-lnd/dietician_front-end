import React, {Fragment, useState} from "react";
import axios from "axios";
import "./Review.css";
import {useSelector} from "react-redux";

const ReviewForm = (props) => {

    const [note, setNote] = useState();
    const [comment, setComment] = useState();
    const [reviews, setReviews] = useState();
    const [error, setError] = useState();

    const token = useSelector(state => state.token);

    const sendReview = () => {

            const baseURL = "http://127.0.0.1:8000/secureapi/review";

            const config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    "Authorization": "bearer " + token,
                }
            }

            const datas = {
                "note": parseInt(note),
                "comment": comment,
                "recipe_id": parseInt(props.recipe_id)
            }

            axios.post(baseURL, datas, config)
                .then((response) => {
                    setReviews('Votre avis a bien été soumis')
                    props.setReloadFunc(props.reload + 1)
                    setError('')
                }).catch((error) => {
                setReviews('')
                setError('Une erreur technique a été détectée, veuillez réessayer ultérieurement')
            });
        }

    return (
        <Fragment>
            <h4 className="b-b">Ajouter un commentaire</h4>
            <form className="form review-form">
                <label>Votre note sur 5 : </label>
                <input
                    type="number"
                    id="note"
                    name="note"
                    min="1"
                    max="5"
                    onInput={event => {setNote(event.target.value)}}
                    required
                />
                <label>Votre commentaire</label>
                <textarea
                    id="comment"
                    name="comment"
                    onInput={event => {setComment(event.target.value)}}
                    required
                />
            </form>
            {error && (<p className="error-msg">{error}</p>)}
            {reviews && (<p className="success-msg">{reviews}</p>)}
            <div className="review-btn">
                <button className="btn" onClick={sendReview}>Soumettre</button>
            </div>
        </Fragment>
    )
};

export default ReviewForm;