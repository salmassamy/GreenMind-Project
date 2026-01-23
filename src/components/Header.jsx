
import React from 'react';
import logo from '../assets/logo.png'; 
import menuIcon from '../assets/Menu.png'; 

const Header = () => {
  return (
    <header className="bg-[#E3D1C8] sticky top-0 w-full z-50 shadow-sm h-20 flex items-center font-inter">
      
      <div className="max-w-[1440px] mx-auto w-full px-10 flex justify-between items-center">
        
        <div className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="GreenMind Logo" 
            className="w-14 h-14 object-contain" 
          />
        </div>

        <nav className="hidden md:flex space-x-12 text-[#683A2F] text-[18px] tracking-widest ">
          
          <a href="/" className="font-semibold transition-all duration-300 hover:font-bold hover:opacity-60 no-underline">
            Home
          </a>

          <a href="/articles" className="font-bold opacity-60 no-underline cursor-default">
            Articles
          </a>

          <a href="/About Us" className="font-semibold transition-all duration-300 hover:font-bold hover:opacity-60 no-underline">
            About Us
          </a>
          <a href="/features" className="font-semibold transition-all duration-300 hover:font-bold hover:opacity-60 no-underline">
            Features
          </a>
          <a href="/products" className="font-semibold transition-all duration-300 hover:font-bold hover:opacity-60 no-underline">
            Products
          </a>         
          <a href="/FAQ" className="font-semibold transition-all duration-300 hover:font-bold hover:opacity-60 no-underline">
            FAQ
          </a>
        </nav>

        <div className="flex items-center cursor-pointer group">
          <img 
            src={menuIcon} 
            alt="Menu" 
            className="w-10 h-auto object-contain transition-all duration-300 group-hover:opacity-60" 
          />
        </div>

      </div>
    </header>
  );
};

export default Header;