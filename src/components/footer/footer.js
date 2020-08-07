import React from "react";
import "./footer.css";

const Footer = () => {

    return (
        <footer id="footer">

            <div className="container">
                <ul className="icons">
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="far fa-envelope"></i></li>
                </ul>
            </div>

            <p>© Untitled. All rights reserved</p>

        </footer>
    );

}

export default Footer;