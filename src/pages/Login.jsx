import React from 'react';
import { useNavigate } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';
import logo from '../assets/logo.png';
import googleIcon from '../assets/Google.png'; 
import facebookIcon from '../assets/Facebook.png';
import xTwitterIcon from '../assets/X-Twitter.png'; 

const Login = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center overflow-y-auto font-inter"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundColor: '#635959', opacity: '0.49' }}></div>

      <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-screen py-10">
        
        <div className="text-white flex-[0.4] flex flex-col items-center justify-center text-center md:text-left md:items-start mb-10 md:mb-0">
          <div className="flex flex-col items-center"> 
            <h1 className="font-bold italic leading-tight text-white drop-shadow-lg text-[48px] md:text-[64px]">
              Welcome Back
            </h1>
            <p className="font-medium text-white mt-[-5px] text-[20px] md:text-[24px]">
              Glad to see you again
            </p>
          </div>
        </div>

        <div className="flex-[0.6] w-full flex justify-end items-center">
          <div 
            className="w-full max-w-[650px] py-8 md:py-10 px-6 md:px-10 flex flex-col items-center shadow-2xl transition-all" 
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
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '60px', width: '70px', height: '50px' }}
              >
                <img src={logo} alt="GreenMindAI" className="w-[55px] h-[55px] object-contain" /> 
              </div>
              <span className="text-white text-2xl font-semibold tracking-wide">GreenMindAI</span>
            </div>

            <form className="w-full flex flex-col items-center">
              <div className="w-full space-y-4">
                <input 
                  type="email" 
                  placeholder="User Name or Email" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }}
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30" 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }}
                  className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30" 
                />
              </div>

              <div className="flex gap-10 my-6 text-white text-lg">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="role" className="w-4 h-4 accent-[#4CAF50] cursor-pointer" />
                  User
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="role" className="w-4 h-4 accent-[#4CAF50] cursor-pointer" />
                  Admin
                </label>
              </div>

              <button className="w-[70%] hover:brightness-110 cursor-pointer text-white font-bold py-3 text-xl shadow-lg transition-all mt-4 transform active:scale-95 shadow-[#4CAF50]/20" style={{ backgroundColor: '#4CAF50', borderRadius: '60px' }}>
                Log In
              </button>
            </form>

            <div className="w-full flex items-center my-6">
              <div className="flex-grow border-t border-white/20"></div>
              <span className="px-3 text-white/50 text-[9px] uppercase tracking-widest font-medium">Or Log in with</span>
              <div className="flex-grow border-t border-white/20"></div>
            </div>

            <div className="flex gap-8 mb-5">
               <button className="hover:scale-110 cursor-pointer transition-transform"><img src={googleIcon} alt="Google" className="w-8 h-8 object-contain" /></button>
               <button className="hover:scale-110 cursor-pointer transition-transform"><img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" /></button>
               <button className="hover:scale-110 cursor-pointer transition-transform"><img src={xTwitterIcon} alt="X" className="w-8 h-8 object-contain" /></button>
            </div>

            <p className="text-white/70 text-[11px]">
              Don't have account? <button onClick={() => navigate('/signup')} className="font-bold text-white underline italic ml-1 cursor-pointer">Create Now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;