import React from 'react';
import { useNavigate } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';
import logo from '../assets/logo.png';
import googleIcon from '../assets/Google.png'; 
import facebookIcon from '../assets/Facebook.png';
import xTwitterIcon from '../assets/X-Twitter.png'; 

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden font-inter"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      {/* الطبقة الشفافة الكلية */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundColor: '#635959', opacity: '0.49' }}></div>

      <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-16 flex flex-col md:flex-row items-center justify-between h-full py-4">
        
        {/* left */}
        <div className="text-white flex-[0.4] flex flex-col items-center justify-center text-center md:text-left md:items-start">
          <div className="flex flex-col items-center"> 
            <h1 className="font-bold italic leading-tight text-white drop-shadow-lg" style={{ fontSize: '64px' }}>
              Create Account
            </h1>
            <p className="font-medium text-white mt-[-5px]" style={{ fontSize: '24px' }}>
              Join our community
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex-[0.6] w-full flex justify-end items-center">
          <div 
            className="w-full max-w-[650px] py-10 px-10 flex flex-col items-center shadow-2xl transition-all" 
            style={{ 
              backgroundColor: 'rgba(18, 39, 26, 0.45)', 
              borderRadius: '60px', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center gap-4 mb-7">
              <div 
                className="flex items-center justify-center" 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                  borderRadius: '60px', 
                  width: '50px',        
                  height: '40px',       
                  padding: '0px' 
                }}
              >
                <img 
                  src={logo} 
                  alt="GreenMindAI" 
                  className="w-[45px] h-[45px] object-contain" 
                /> 
              </div>
              <span className="text-white text-2xl font-semibold tracking-wide">GreenMindAI</span>
            </div>

            <form className="w-full flex flex-col items-center">
              <div className="w-full space-y-4">
                <input 
                  type="text" 
                  placeholder="User Name" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }} 
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }}
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 transition-all" 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }}
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 transition-all" 
                />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }}
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 transition-all" 
                />
              </div>
              
              <div className="w-full flex items-center gap-2 text-white text-[11px] px-4 py-2 mt-1">
                <input type="checkbox" id="terms" className="w-3.5 h-3.5 accent-[#4CAF50] cursor-pointer" />
                <label htmlFor="terms" className="cursor-pointer opacity-90">I accept the terms and Privacy Policy</label>
              </div>

              <button 
                className="w-[70%] hover:brightness-110 text-white font-bold py-3 text-xl shadow-lg transition-all mt-4 transform active:scale-95 shadow-[#4CAF50]/20"
                style={{ 
                  backgroundColor: '#4CAF50', 
                  borderRadius: '60px' 
                }} 
              >
                Sign Up
              </button>
            </form>

            <div className="w-full flex items-center my-6">
              <div className="flex-grow border-t border-white/20"></div>
              <span className="px-3 text-white/50 text-[9px] uppercase tracking-widest font-medium">Or Sign up with</span>
              <div className="flex-grow border-t border-white/20"></div>
            </div>

            <div className="flex gap-8 mb-5">
               <button className="hover:scale-110 transition-transform"><img src={googleIcon} alt="Google" className="w-8 h-8 object-contain" /></button>
               <button className="hover:scale-110 transition-transform"><img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" /></button>
               <button className="hover:scale-110 transition-transform"><img src={xTwitterIcon} alt="X" className="w-8 h-8 object-contain" /></button>
            </div>

            <p className="text-white/70 text-[11px]">
              Already have account? <button onClick={() => navigate('/login')} className="font-bold text-white underline italic ml-1">Log in Now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;