import React from "react";
import "./spot-light.css";

const SpotLight = (props) => {

    return (

        <div className="spotLight">

            <div className="spotLight__image">
                <img src={props.image} alt="Spot Light" />
            </div>

            <div className="spotLight__text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>

        </div>

    );

}

export default SpotLight;