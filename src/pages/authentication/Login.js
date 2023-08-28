import React, {useState} from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const dispatch = useDispatch();
    const nav = useNavigate();

    const sendConnexion = () => {
        const getUserURL =  "http://127.0.0.1:8000/secureapi/user";
        const getTokenURL = "http://127.0.0.1:8000/api/login_check";

        // Récupération du token
        axios.post(
            getTokenURL,
            {"username": username, "password": password},
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then((response) => {
            const token =  response.data.token
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "bearer " + response.data.token,
                }
            }

            // Récupération des infos de l'utilisateur
            axios.get(
                getUserURL,
                config
            ).then((response) => {
                // Création des variables de sessions
                window.sessionStorage.setItem("token", token);
                window.sessionStorage.setItem("firstname", response.data.firstname);
                window.sessionStorage.setItem("lastname", response.data.lastname);
                window.sessionStorage.setItem("email", response.data.email);
                window.sessionStorage.setItem("phone", response.data.phone);
                window.sessionStorage.setItem("allergens", response.data.allergens);
                window.sessionStorage.setItem("diets", response.data.diets);

                dispatch ({
                    type: "SET_USER",
                    payload: {
                        token: token,
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        email: response.data.email,
                        phone: response.data.phone,
                        allergens: response.data.allergens,
                        diets: response.data.diets
                    }
                })

                // Après connexion, redirection vers la page de recettes
                nav("/recettes");
            });
        }).catch(function (error) {
            setError("Veuillez vérifier vos identifiants de connexion, une erreur a été détectée !")
        });
    }

    return (
        <div className="container-auth">
            <h1 className="txt-center pt40">Espace réservé à la clientèle</h1>
            {error && (<p className="error-msg">{error}</p>)}
            <form className="form">
                <label>E-mail</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    onInput={event => {setUsername(event.target.value)}}
                    required
                />
                <label>Mot de passe</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onInput={event => {setPassword(event.target.value)}}
                    required
                />
            </form>
            <div className="btn-form">
                <button className="btn" type="button" onClick={sendConnexion}>Se connecter</button>
            </div>
        </div>
    )
};

export default Login;