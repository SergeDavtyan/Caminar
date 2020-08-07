import React from "react";
import Banner from "../banner/banner";
import Special from "../special/special";
import Content from "../content/content";

const One = () => {

    const text = "Fringilla Fermentum Tellus"

    return (
        <div id="one">
            <Banner />
            <Special text={text} />
            <Content />
        </div>
    );

}

export default One;