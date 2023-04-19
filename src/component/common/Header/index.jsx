import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => (
    <section>
        
        <div className="Header-container-img-texts">
        <Link to={"/"}>
        <img className="Header-img" src="https://www.zupimages.net/up/23/16/yojv.png" alt="logo" />
        </Link>
        
        <div className="Header-container-texts">
        <h1 className="Header-h1">The reference site for beer lovers</h1>
        <p className="Header-p">Taste the best flavors</p>
        </div>
        </div>

        <div className="Header-container-bubble">
    <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
    </div>
      </div>
    </section>

);

export default Header;