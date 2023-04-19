import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Footer = () => (
    <section>
        
        <div className="Footer-container">
        <Link to={"/"}>
        <img className="Footer-img" src="https://www.zupimages.net/up/23/16/yojv.png" alt="logo" />
        </Link>
        <p className="Footer-p">All rights belonging to @rabatecompagny</p>
        </div>

    </section>

);

export default Footer;