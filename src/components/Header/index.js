import React from 'react';
import Navigation from "../Navigation";
import bg_webp from '../../assets/images/PortfolioBG.webp';
import bg_png from '../../assets/images/PortfolioBG.png';

function Header() {
    return (
        <div>
            <header>
                <h1>
                    <a href="/">JON WAALER</a>
                </h1>
                <button id="button">&#9776;</button>
                <Navigation></Navigation>
            </header>

            <section>
                <div
                    className="jumbotron-blur"
                    style={{
                        backgroundImage: `url(${bg_webp}), url(${bg_png})`
                    }}
                >
                </div>
                <div className="jumbotron-text">
                    <h2>Full-stack Web developer & Video Game Programmer</h2>
                </div>
            </section>
        </div>
    );
}

export default Header;