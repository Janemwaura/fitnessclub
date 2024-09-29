import React from 'react'
import './Footer.css'
import Github from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/github.png'
import Instagram from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/instagram.png'
import LinkedIn from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/linkedin.png'
import Logo from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/logo.png'
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
              <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram}alt="" />
                <img src={LinkedIn}alt="" />
              </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;