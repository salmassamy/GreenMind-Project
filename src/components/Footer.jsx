import React from 'react';
import logo from '../assets/logo.png'; 
import facebookIcon from '../assets/Facebook.png';
import instagramIcon from '../assets/Instagram.png';
import twitterIcon from '../assets/Twitter.png';

function Footer() {
  return (
    <footer className="main-footer">
      
      <div className="footer-content">
        
        <div className="footer-section logo-section">
          <a href="/" className="footer-logo-link">
             <img src={logo} alt="GreenMind Logo" className="footer-logo-img" /> 
          </a>
          <p>Supporting smart and sustainable agriculture.</p>
          <p>Providing seeds, soil, and reliable growing solutions for all.</p>
        </div>

        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/why-us">Why Us</a></li>
            <li ><a href="/articles">Articles</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>+201023456789</p>
          <p>support@GreenMind.com</p>
          <p>Al-Kaiman, Al-Fayoum-Egypt</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
            <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
            <img src={twitterIcon} alt="Twitter" className="social-icon-img" />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Created by TEAM NAME | all rights reserved by EELU</p>
      </div>
    </footer>
  );
}
export default Footer;