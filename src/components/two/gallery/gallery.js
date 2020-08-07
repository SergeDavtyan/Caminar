import React from "react";
import "./gallery.css";

import pic1 from "../../../images/pic03.jpg";
import pic2 from "../../../images/pic01.jpg";
import pic3 from "../../../images/pic04.jpg";
import pic4 from "../../../images/pic05.jpg";

const Gallery = () => {

    return (
        <ul className="gallery">
            <li><img src={pic1} alt="Gallery" /></li>
            <li><img src={pic2} alt="Gallery" /></li>
            <li><img src={pic3} alt="Gallery" /></li>
            <li><img src={pic4} alt="Gallery" /></li>
        </ul>
    );

}

export default Gallery;