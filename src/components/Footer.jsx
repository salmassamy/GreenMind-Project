import React from 'react';
import fbIcon from '../assets/Facebook.png';
import igIcon from '../assets/Instagram.png';
import twIcon from '../assets/Twitter.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full font-inter">
      <div className="bg-[#F7FEF4] py-20 px-10 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16 text-left">
          
          <div className="flex-1 max-w-[350px]">
            <img src={logo} alt="GreenMind Logo" className="w-16 h-16 mb-8 object-contain" />
            <p className="text-[#4B4B4B] text-[18px] leading-relaxed">
              Supporting smart and sustainable agriculture. <br /><br />
              Providing seeds, soil, and reliable growing solutions for all.
            </p>
          </div>

          <div className="flex-1 max-w-[200px]">
            <h3 className="text-[#683A2F] text-[24px] font-bold mb-8">Pages</h3>
            <ul className="space-y-4 text-[#4B4B4B] text-[18px]">
              <li><a href="/" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">Home</a></li>
              <li><a href="/features" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">Features</a></li>
              <li><a href="/products" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">Products</a></li>
              <li><a href="/reviews" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">Reviews</a></li>
              <li><a href="/why-us" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">Why Us</a></li>
              <li><a href="/about" className="transition-all duration-300 hover:text-[#4CAF50] hover:font-bold no-underline">About Us</a></li>
              <li><a href="/articles" className="text-[#4CAF50] font-bold">Articles</a></li>
            </ul>
          </div>

          <div className="flex-1 max-w-[300px]">
            <h3 className="text-[#683A2F] text-[24px] font-bold mb-8">Contact</h3>
            <div className="space-y-5 text-[#4B4B4B] text-[18px]">
              <p>+201023456789</p>
              <p>support@GreenMind.com</p>
              <p className="mb-8">Al-Kaiman, Al-Fayoum-Egypt</p>
              
              <div className="flex space-x-6 pt-4">
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src={fbIcon} alt="Facebook" className="w-10 h-10 object-contain" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src={igIcon} alt="Instagram" className="w-10 h-10 object-contain" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <img src={twIcon} alt="Twitter" className="w-10 h-10 object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#E3D1C8] py-8 text-center">
        <p className="text-white text-[18px]">
          Created by <span className="font-bold text-[#683A2F]">GreenMind Team</span> | all rights reserved by EELU
        </p>
      </div>
    </footer>
  );
};

export default Footer;




