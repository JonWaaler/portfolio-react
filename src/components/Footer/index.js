import React from 'react';

function Footer(){
    return (
    <footer className="aboutme" id="contact-me">
        <div className="content-border">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-content">
          <a href="tel:416-912-7235">(416) - 912 - 7235</a>
          <a href="mailto:JonWaaler@outlook.com">JonWaaler@outlook.com</a>
          <a href="https://github.com/JonWaaler?tab=repositories" rel="noreferrer" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/jon-waaler-0076a7158/" rel="noreferrer" target="_blank">Linkedin</a>
        </div>
    </footer>);
}

export default Footer;