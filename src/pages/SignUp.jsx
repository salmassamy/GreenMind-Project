import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';
import logo from '../assets/logo.png';
import googleIcon from '../assets/Google.png'; 
import facebookIcon from '../assets/Facebook.png';
import xTwitterIcon from '../assets/X-Twitter.png'; 

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // التحقق من وجود @gmail.com 
    // if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
    //   setError('Email must contain @gmail.com'); 
    //   return;
    // }

    // التحقق من تطابق كلمة السر
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    console.log("Success:", formData);
  };

  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center overflow-y-auto font-inter"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundColor: '#635959', opacity: '0.49' }}></div>

      <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-screen py-10">
        
        <div className="text-white flex-[0.4] flex flex-col items-center justify-center text-center md:text-left md:items-start mb-10 md:mb-0">
          <div className="flex flex-col items-center"> 
            <h1 className="font-[900] italic leading-tight text-white drop-shadow-lg text-[48px] md:text-[56px]">
              Create Account
            </h1>
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
              <h3 className="text-white text-[28px] font-bold tracking-wide">GreenMindAI</h3>
            </div>

            <form className="w-full flex flex-col items-center" onSubmit={handleSignUp}>
              <div className="w-full space-y-4">
                <input name="userName" type="text" placeholder="User Name" onChange={handleChange} style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }} className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 text-[18px] font-normal" required />
                <input name="email" type="email" placeholder="Email Address" onChange={handleChange} style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }} className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 text-[18px] font-normal" required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }} className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 text-[18px] font-normal" required />
                <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} style={{ backgroundColor: 'rgba(217, 217, 217, 0.38)' }} className="w-full border-none rounded-full py-3 px-8 text-white placeholder-white outline-none text-center focus:ring-1 focus:ring-white/30 text-[18px] font-normal" required />
              </div>
              
              {/* رسالة الخطأ  */}
              {error && (
                <p className="text-red-400 mt-3 font-bold text-[16px] animate-pulse">
                   ⚠️ {error}
                </p>
              )}

              <div className="w-full flex items-center gap-2 text-white text-[14px] px-4 py-2 mt-1 font-normal">
                <input type="checkbox" id="terms" className="w-4 h-4 accent-[#4CAF50] cursor-pointer" required />
                <label htmlFor="terms" className="cursor-pointer opacity-90">I accept the terms and Privacy Policy</label>
              </div>

              <button type="submit" className="w-[70%] hover:brightness-110 cursor-pointer text-white font-bold py-3 text-[18px] shadow-lg transition-all mt-4 transform active:scale-95 shadow-[#4CAF50]/20" style={{ backgroundColor: '#4CAF50', borderRadius: '60px' }}>
                Sign Up
              </button>
            </form>

            <div className="w-full flex items-center my-6">
              <div className="flex-grow border-t border-white/20"></div>
              <span className="px-3 text-white/50 text-[12px] uppercase tracking-widest font-medium">Or Sign up with</span>
              <div className="flex-grow border-t border-white/20"></div>
            </div>

            <div className="flex gap-8 mb-5">
               <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-transform">
                 <img src={googleIcon} alt="Google" className="w-8 h-8 object-contain" />
               </a>
               <a href="https://www.facebook.com/r.php" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-transform">
                 <img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" />
               </a>
               <a href="https://x.com/i/flow/signup" target="_blank" rel="noopener noreferrer" className="hover:scale-110 cursor-pointer transition-transform">
                 <img src={xTwitterIcon} alt="X" className="w-8 h-8 object-contain" />
               </a>
            </div>

            <p className="text-white/70 text-[14px] font-normal">
              Already have account? <button onClick={() => navigate('/login')} className="font-bold text-white underline italic ml-1 cursor-pointer">Log in Now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;