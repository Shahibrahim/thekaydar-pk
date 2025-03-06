import React from "react";
import Logo from "../Images/logo.png"
import Footerface from "../Images/Footerface.svg"
import Footertwit from "../Images/Footertwit.svg"
import Footerinsta from "../Images/Footerinsta.svg"
import Footerlinked from "../Images/Footerlinked.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img className="footer-logo" src={Logo} alt="" srcset="" />
          <p className="footer-description">
            One stop place to get everything you need.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><img src={Footerface} alt="" srcset="" /></a>
            <a href="#" className="social-icon"><img src={Footertwit} alt="" srcset="" /></a>
            <a href="#" className="social-icon"><img src={Footerinsta} alt="" srcset="" /></a>
            <a href="#" className="social-icon"><img src={Footerlinked} alt="" srcset="" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Case studies</a>
            <a href="#">Reviews</a>
            <a href="#">Updates</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact us</a>
            <a href="#">Careers</a>
            <a href="#">Culture</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">Getting started</a>
            <a href="#">Help center</a>
            <a href="#">Server status</a>
            <a href="#">Report a bug</a>
            <a href="#">Chat support</a>
          </div>
          <div className="footer-column">
            <h4>Downloads</h4>
            <a href="#">iOS</a>
            <a href="#">Android</a>
            <a href="#">Mac</a>
            <a href="#">Windows</a>
            <a href="#">Chrome</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2025 Thekaydar | All Rights Reserved |
          <a href="#"> Terms and Conditions</a> |
          <a href="#"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
