import React from 'react';
import logo from '../assets/logo.png'; 
import userIconImage from '../assets/User.png'; 

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/" className="logo-link"> 
          <img src={logo} alt="GreenMind Logo" className="header-logo" /> 
        </a>
      </div>

      <nav className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/why-us">Why Us</a></li>
        </ul>
      </nav>

      <div className="user-access">
        <img 
            src={userIconImage} 
            alt="User Profile" 
            className="user-icon-img" 
        />
      </div>
    </header>
  );
}
export default Header;