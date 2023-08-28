import React from "react";
import './CardService.css'

const CardService = (props) => {
    return (
        <div className="card-services">
            <img src={props.picSrc} alt={props.picAlt}/>
            <h3 className="txt-center">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )

};

export default CardService;