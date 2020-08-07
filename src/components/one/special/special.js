import React from "react";
import "./special.css";

const Special = (props) => {

    return (
        <div className={`special ${props.className ? props.className : ""}`}>
            <h2>{props.text}</h2>
            <p>vehicula urna sed justo bibendum</p>
        </div>
    );

}

export default Special;