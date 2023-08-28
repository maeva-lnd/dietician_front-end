import React, {useState} from "react";
import './Contact.css';
import axios from "axios";

const Contact = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [contactMessage, setContactMessage] = useState();



    const sendMessage = () => {
        if (checkForm()) {
            const baseURL = "http://127.0.0.1:8000/api/contact";

            const config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }

            const datas = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phone": phone,
                "message": message,
            }

            axios.post(baseURL, datas, config)
                .then((response) => {
                    setContactMessage('Votre message a bien été pris en compte, vous recevrez une réponse dans les plus brefs délais !')
                    setError(undefined)
                }).catch((error) => {
                setContactMessage(undefined)
                setError('Une erreur technique a été détectée, veuillez réessayer ultérieurement')
            });
        } else {
            setContactMessage(undefined)
            setError("Une erreur a été détectée, veuillez vérifier que tous les champs sont correctement remplis")
        }
    }

    const checkForm = () => {
        if (
            firstname !== ""
            && firstname !== undefined
            && lastname !== ""
            && lastname !== undefined
            && email !== ""
            && email !== undefined
            && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            && phone !== ""
            && phone !== undefined
            && /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone)
            && message !== ""
            && message !== undefined
        ) {

            return true

        } else {
            return false
        }
    }


    return (
        <div className="container-contact">
            <h1 className="txt-center pt40">Vous avez une question ?</h1>
            <p className="txt-center">
                Si vous souhaitez travailler avec moi, vous pouvez me contacter en remplissant le formulaire ci-dessous.<br/>
                Vous pouvez me suivre sur Instagram ou Facebook pour être informé de mes dernières actualités.<br/><br/>
                Cabinet Sandrine Coupart, diététicienne-nutritionniste <br/>
                60 rue Benoit, 14000 Caen <br/>
                0576765432 <br/>
                sandrinecoupart@gmail.com
            </p>
            <form className="contact-form form">
                <label>Votre prénom</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    onInput={event => {setFirstname(event.target.value)}}
                    required
                />
                <label>Votre nom</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    onInput={event => {setLastname(event.target.value)}}
                    required
                />
                <label>Votre e-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onInput={event => {setEmail(event.target.value)}}
                    required
                />
                <label>Votre téléphone</label>
                <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    onInput={event => {setPhone(event.target.value)}}
                    required
                />
                <label>Votre message</label>
                <textarea
                    id="message"
                    name="message"
                    onInput={event => {setMessage(event.target.value)}}
                    required
                />
            </form>
            {error && (<p className="error-msg">{error}</p>)}
            {contactMessage && (<p className="success-msg">{contactMessage}</p>)}
            <div className="btn-form">
                <button className="btn" onClick={sendMessage}>Envoyer</button>
            </div>
        </div>
    )

};

export default Contact;