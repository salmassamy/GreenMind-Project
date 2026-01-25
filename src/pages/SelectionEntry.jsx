import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';

const SelectionEntry = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
    setTimeout(() => {
      navigate('/signup', { state: { role } });
    }, 600);
  };

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ backgroundColor: '#635959', opacity: '0.49' }}
      ></div>

      <div 
        className="relative z-10 w-[90%] max-w-[540px] py-14 px-8 flex flex-col items-center shadow-2xl transition-all"
        style={{ 
          backgroundColor: 'rgba(18, 39, 26, 0.88)', 
          borderRadius: '40px', 
          border: '1px solid #000000', 
          boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)', 
        }}
      >
        <h1 className="text-white text-[42px] md:text-[50px] font-bold italic mb-12 text-center font-inter drop-shadow-md">
          Welcome Back
        </h1>
        
        <div className="flex items-center justify-center space-x-10 text-white text-[20px] md:text-[24px] font-inter">
          <span className="opacity-90">Log in as:</span>
          
          <div onClick={() => handleSelect('user')} className="flex items-center cursor-pointer group">
            <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 mr-2 ${selectedRole === 'user' ? 'bg-[#A0443B] border-[#A0443B]' : 'bg-transparent border-white'}`}></div>
            <span className={`transition-all duration-300 group-hover:text-gray-300 ${selectedRole === 'user' ? 'font-bold' : 'opacity-80'}`}>User</span>
          </div>

          <div onClick={() => handleSelect('admin')} className="flex items-center cursor-pointer group">
            <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 mr-2 ${selectedRole === 'admin' ? 'bg-[#A0443B] border-[#A0443B]' : 'bg-transparent border-white'}`}></div>
            <span className={`transition-all duration-300 group-hover:text-gray-300 ${selectedRole === 'admin' ? 'font-bold' : 'opacity-80'}`}>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionEntry;