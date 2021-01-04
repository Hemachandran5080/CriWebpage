import React from 'react'
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="header__section fade__bottom__header">
            <img src={process.env.PUBLIC_URL + "/logo.png"} />
        </div>
        <div className="fade__bottom"></div>
        </header>
    )
}

export default Header;
