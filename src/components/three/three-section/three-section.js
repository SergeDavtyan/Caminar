import React from "react";

import pic1 from "../../../images/pic06.jpg";
import pic2 from "../../../images/pic07.jpg";
import pic3 from "../../../images/pic08.jpg";

import SpotLight from "../spot-light/spot-light";

const Three = () => {

    const title1 = "Viverra Hendrerit";
    const text1 = "Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.";

    const title2 = "Curabitur Eget";
    const text2 = "Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.";

    const title3 = "Morbi Eleifend";
    const text3 = "Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel.";

    return (
        <div id="three">
            <SpotLight
                image={pic1}
                title={title1}
                text={text1} />

            <SpotLight
                image={pic2}
                title={title2}
                text={text2} />

            <SpotLight
                image={pic3}
                title={title3}
                text={text3} />

        </div>
    );

}

export default Three;