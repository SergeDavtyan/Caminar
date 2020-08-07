import React from "react";
import "./two-section.css";
import Special from "../../one/special/special";
import Gallery from "../gallery/gallery";

const Two = (props) => {

    const specialTwo = "special-two";
    const text = "Vestibulum Convallis";

    return (
        <div id="two">
            <Special
                className={specialTwo}
                text={text} />
            <Gallery />
        </div>
    );

}

export default Two;