import React from 'react';
import Navigation from "../Navigation";

function Header() {
    return (
        <header>
            <h1>
                <a href="/">JON WAALER</a>
            </h1>
            <button id="button">&#9776;</button>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;