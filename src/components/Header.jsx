
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 
import menuIcon from '../assets/Menu.png'; 

const Header = () => {
  const navigate = useNavigate(); 
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Products', path: '/products' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => currentPath === path || currentPath === `${path}/`;

    //  18px Semi-Bold (600) 
  const linkStyles = "text-[18px] font-semibold text-[#683A2F] no-underline transition-all duration-300 tracking-widest cursor-pointer";

  return (
    <header className="bg-[#E3D1C8] sticky top-0 w-full z-50 shadow-sm font-inter">
      <div className="max-w-[1440px] mx-auto h-16 px-5 md:px-10 flex justify-between items-center relative">
        
         {/* Logo  */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
        </div>

        {/* Links 18px Semi-Bold (600) */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a 
              key={link.path}
              href={link.path} 
              className={`${linkStyles} ${
                isActive(link.path) 
                  ? 'opacity-100 border-b-2 border-[#683A2F] pb-1' 
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Dropdown Menu */}
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer ml-4" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          >
            <img src={menuIcon} alt="Menu" className="w-8 h-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div 
            className={`absolute right-0 mt-4 w-56 bg-[#E3D1C8] shadow-2xl rounded-xl overflow-hidden transition-all duration-300 z-[100] ${
              isMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col p-4 space-y-2">
               {/* Links phone */}
               <div className="md:hidden flex flex-col space-y-2">
                 {links.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={`${linkStyles} py-2 px-3 rounded-lg hover:bg-[#683A2F]/10 ${
                      isActive(link.path) 
                        ? 'opacity-100 bg-[#683A2F]/10' 
                        : 'opacity-80'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-[1px] bg-[#683A2F]/10 my-2"></div>
               </div>
        
               {/* Menu Options */}
               <button className={`${linkStyles} py-2 px-3 text-left w-full hover:bg-[#683A2F]/10 opacity-80 hover:opacity-100`}>
                 Profile
               </button>
               <button 
                onClick={() => { navigate('/selection'); setIsMenuOpen(false); }} 
                className={`${linkStyles} py-2 px-3 text-left w-full hover:bg-[#683A2F]/10 opacity-80 hover:opacity-100`}
               >
                 Sign Up
               </button>
               <button className={`${linkStyles} py-2 px-3 text-left w-full hover:bg-[#683A2F]/10 opacity-80 hover:opacity-100`}>
                 Logout
               </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;