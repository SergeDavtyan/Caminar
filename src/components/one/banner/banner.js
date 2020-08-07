import React from "react";
import "./banner.css";
import banner from "../../../images/pic02.jpg";

const Banner = () => {

    return (
        <div className="banner">
            <img src={banner} alt="Banner" />
        </div>
    );

}

export default Banner;