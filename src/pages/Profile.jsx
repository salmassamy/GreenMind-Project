// import React, { useState, useEffect, useRef } from 'react';
// import Header from '../components/Header'; 
// import Footer from '../components/Footer';

// const Profile = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     document.title = "My Profile";
//     window.scrollTo(0, 0);
//   }, []);

//   const [userData, setUserData] = useState({
//     name: "User name",
//     email: "aaaa@gmail.com",
//     phone: "01012345678",
//     gender: "Female",
//     profilePic: null
//   });

//   const handleImageClick = () => {
//     if (isEditMode) fileInputRef.current.click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUserData({ ...userData, profilePic: imageUrl });
//     }
//   };

//   const handleCancel = () => {
//     setIsEditMode(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#F9FFF9] font-inter flex flex-col text-[#432818]">
//       <Header />

//       <main className="flex-grow w-full max-w-7xl mx-auto px-8 md:px-20 py-12 text-left">
        
//         <h1 className="text-[40px] md:text-[56px] font-[900] mb-12 text-center w-full text-[#432818]">
//           My profile
//         </h1>

//         <div className="flex flex-col items-start relative w-full">
          
//           {isEditMode && (
//             <button 
//               onClick={handleCancel}
//               className="absolute right-0 top-0 text-[20px] md:text-[24px] font-[800] underline text-[#432818] cursor-pointer hover:opacity-70 transition-all"
//             >
//               Cancel
//             </button>
//           )}

//           <div className="flex flex-col items-start mb-12">
//             <div className="w-32 h-32 md:w-40 md:h-40 bg-[#D9D9D9] rounded-full mb-4 shadow-sm overflow-hidden border-2 border-gray-200">
//                 {userData.profilePic && <img src={userData.profilePic} alt="Profile" className="w-full h-full object-cover" />}
//             </div>

//             <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />

//             {!isEditMode ? (
//               <button 
//                 onClick={() => setIsEditMode(true)}
//                 className="text-[18px] font-semibold underline text-[#432818] hover:opacity-70 transition-colors cursor-pointer"
//               >
//                 Edit profile
//               </button>
//             ) : (
//               <button 
//                 onClick={handleImageClick}
//                 className="text-[14px] font-bold text-[#432818] underline cursor-pointer hover:opacity-60 transition-opacity"
//               >
//                 Change profile photo
//               </button>
//             )}
//           </div>

//           <div className="w-full max-w-2xl space-y-10">
            
//             {/* User info - تم توحيد الألوان للبني هنا */}
//             {[
//               { label: 'User name', key: 'name', type: 'text' },
//               { label: 'Email', key: 'email', type: 'email' },
//               { label: 'Phone number', key: 'phone', type: 'text' }
//             ].map((field) => (
//               <div key={field.label} className="flex flex-col gap-3 relative">
//                 <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">{field.label}</label>
//                 {!isEditMode ? (
//                   <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] text-[#432818] cursor-default shadow-sm min-h-[60px] flex items-center">
//                     {userData[field.key]}
//                   </div>
//                 ) : (
//                   <div className="relative flex items-center">
//                     <input 
//                       type={field.type}
//                       value={userData[field.key]}
//                       onChange={(e) => setUserData({...userData, [field.key]: e.target.value})}
//                       className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                     />
//                     <span className="absolute left-[105%] whitespace-nowrap text-[18px] font-bold underline text-[#432818] cursor-pointer">Edit</span>
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Password section */}
//             <div className="flex flex-col gap-3 relative">
//               <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">Password</label>
//               {!isEditMode ? (
//                 <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] text-[#432818] cursor-default shadow-sm min-h-[60px] flex items-center">
//                   ••••••••••••
//                 </div>
//               ) : (
//                 <div className="space-y-10 w-full">
//                   <div className="relative flex items-center">
//                     <input 
//                       type="password" 
//                       placeholder="Enter your current password"
//                       className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                     />
//                     <span className="absolute left-[105%] whitespace-nowrap text-[18px] font-bold underline text-[#432818] cursor-pointer">Edit</span>
//                   </div>
                  
//                   <div className="flex flex-col gap-3">
//                     <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">New Password</label>
//                     <div className="relative flex items-center">
//                       <input 
//                         type="password" 
//                         placeholder="Enter your new password"
//                         className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Gender Section */}
//             <div className="flex items-center gap-8 pt-4 text-[18px] font-semibold text-[#432818]">
//                <span>Gender:</span>
//                <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Male'})}>
//                   <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
//                     {userData.gender === 'Male' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
//                   </div>
//                   <span>Male</span>
//                </div>
//                <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Female'})}>
//                   <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
//                     {userData.gender === 'Female' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
//                   </div>
//                   <span>Female</span>
//                </div>
//             </div>

//             {/* Save Button */}
//             {isEditMode && (
//               <div className="pt-10 flex justify-start">
//                 <button 
//                   onClick={() => setIsEditMode(false)}
//                   className="bg-[#432818] text-white text-[20px] font-bold py-3 px-14 rounded-[12px] shadow-md hover:scale-105 transition-all cursor-pointer"
//                 >
//                   Save Profile
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Profile;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { API_ENDPOINTS } from '../api/endpoints';

// const Profile = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const fileInputRef = useRef(null);

//   // user info
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     profilePic: null
//   });

//   // password info
//   const [passwords, setPasswords] = useState({
//     current: '',
//     next: ''
//   });

//   // get user info
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) return;

//         const response = await axios.get(API_ENDPOINTS.GET_PROFILE, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         setUserData(response.data);
//       } catch (err) {
//         console.error("Fetch Error:", err);
//         setError("Failed to load profile data.");
//       }
//     };

//     document.title = "My Profile";
//     window.scrollTo(0, 0);
//     fetchProfile();
//   }, []);

//   const handleImageClick = () => {
//     if (isEditMode) fileInputRef.current.click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUserData({ ...userData, profilePic: imageUrl });
//     }
//   };

//   const handleCancel = () => {
//     setIsEditMode(false);
//     setError('');
//     setPasswords({ current: '', next: '' });
//   };

//   // save updated profile
//   const handleSaveProfile = async () => {
//     setLoading(true);
//     setError('');
//     const token = localStorage.getItem('token');

//     try {
//       await axios.put(API_ENDPOINTS.UPDATE_PROFILE, {
//         name: userData.name,
//         phone: userData.phone,
//         gender: userData.gender,
//         profilePic: userData.profilePic
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (passwords.current && passwords.next) {
//         await axios.post(API_ENDPOINTS.CHANGE_PASSWORD, {
//           oldPassword: passwords.current,
//           newPassword: passwords.next
//         }, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       }

//       setIsEditMode(false);
//       setPasswords({ current: '', next: '' });
//       alert("Profile updated successfully.");
//     } catch (err) {
//       console.error("Update Error:", err.response?.data);
//       setError(err.response?.data?.message || "Update failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#F9FFF9] font-inter flex flex-col text-[#432818] w-full min-h-screen">
//       <main className="flex-grow w-full max-w-7xl mx-auto px-8 md:px-20 py-12 flex flex-col items-center">
        
//         <h1 className="text-[40px] md:text-[56px] font-[900] mb-12 text-center w-full text-[#432818]">
//           My profile
//         </h1>

//         <div className="flex flex-col items-center relative w-full max-w-2xl">
          
//           {isEditMode && (
//             <button 
//               onClick={handleCancel}
//               className="absolute -right-4 md:-right-20 top-0 text-[20px] md:text-[24px] font-[800] underline text-[#432818] cursor-pointer hover:opacity-70 transition-all"
//             >
//               Cancel
//             </button>
//           )}

//           <div className="flex flex-col items-center mb-12">
//             <div className="w-32 h-32 md:w-40 md:h-40 bg-[#D9D9D9] rounded-full mb-4 shadow-sm overflow-hidden border-2 border-gray-200">
//                 {userData.profilePic && <img src={userData.profilePic} alt="Profile" className="w-full h-full object-cover" />}
//             </div>

//             <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />

//             {!isEditMode ? (
//               <button 
//                 onClick={() => setIsEditMode(true)}
//                 className="text-[18px] font-semibold underline text-[#4B4B4B] hover:text-[#432818] transition-colors cursor-pointer"
//               >
//                 Edit profile
//               </button>
//             ) : (
//               <button 
//                 onClick={handleImageClick}
//                 className="text-[14px] font-bold text-[#4B4B4B] underline cursor-pointer hover:text-[#432818] transition-opacity"
//               >
//                 Change profile photo
//               </button>
//             )}
//           </div>

//           {error && <p className="text-red-500 mb-5 font-bold animate-pulse">⚠️ {error}</p>}

//           <div className="w-full space-y-10">
            
//             {[
//               { label: 'User name', key: 'name', type: 'text' },
//               { label: 'Email', key: 'email', type: 'email', disabled: true }, 
//               { label: 'Phone number', key: 'phone', type: 'text' }
//             ].map((field) => (
//               <div key={field.label} className="flex flex-col gap-3 relative w-full">
//                 <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">{field.label}</label>
//                 {!isEditMode || field.disabled ? (
//                   <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] text-[#432818] cursor-default shadow-sm min-h-[60px] flex items-center">
//                     {userData[field.key]}
//                   </div>
//                 ) : (
//                   <div className="relative flex items-center w-full">
//                     <input 
//                       type={field.type}
//                       value={userData[field.key] || ''}
//                       onChange={(e) => setUserData({...userData, [field.key]: e.target.value})}
//                       className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                     />
//                     <span className="absolute left-[102%] whitespace-nowrap text-[18px] font-bold underline text-[#432818] hidden md:block">Edit</span>
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div className="flex flex-col gap-3 relative w-full">
//               <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">Password</label>
//               {!isEditMode ? (
//                 <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] text-[#432818] cursor-default shadow-sm min-h-[60px] flex items-center">
//                   ••••••••••••
//                 </div>
//               ) : (
//                 <div className="space-y-10 w-full">
//                   <div className="relative flex items-center">
//                     <input 
//                       type="password" 
//                       placeholder="Enter your current password"
//                       value={passwords.current}
//                       onChange={(e) => setPasswords({...passwords, current: e.target.value})}
//                       className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                     />
//                     <span className="absolute left-[102%] whitespace-nowrap text-[18px] font-bold underline text-[#432818] hidden md:block">Edit</span>
//                   </div>
                  
//                   <div className="flex flex-col gap-3">
//                     <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">New Password</label>
//                     <div className="relative flex items-center">
//                       <input 
//                         type="password" 
//                         placeholder="Enter your new password"
//                         value={passwords.next}
//                         onChange={(e) => setPasswords({...passwords, next: e.target.value})}
//                         className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] text-[#432818] outline-none shadow-sm bg-[#F9FFF9] cursor-text focus:ring-1 focus:ring-[#432818]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-center gap-8 pt-4 text-[18px] font-semibold text-[#432818]">
//                 <span>Gender:</span>
//                 <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Male'})}>
//                   <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
//                     {userData.gender === 'Male' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
//                   </div>
//                   <span>Male</span>
//                 </div>
//                 <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Female'})}>
//                   <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
//                     {userData.gender === 'Female' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
//                   </div>
//                   <span>Female</span>
//                 </div>
//             </div>

//             {isEditMode && (
//               <div className="pt-10 flex justify-center">
//                 <button 
//                   onClick={handleSaveProfile}
//                   disabled={loading}
//                   className={`bg-[#432818] text-white text-[20px] font-bold py-3 px-14 rounded-[12px] shadow-md hover:scale-105 transition-all cursor-pointer ${loading ? 'opacity-50' : ''}`}
//                 >
//                   Save Profile 
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../api/endpoints';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // بيانات المستخدم
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    profilePic: null
  });

  // بيانات تغيير الباسورد
  const [passwords, setPasswords] = useState({
    current: '',
    next: ''
  });

  // 1. جلب البيانات عند فتح الصفحة
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("Please login first.");
          return;
        }

        const response = await axios.get(API_ENDPOINTS.GET_PROFILE, {
          headers: { 
            Authorization: `Bearer ${token}`,
            // السطر ده عشان نتخطى صفحة تحذير ngrok والبيانات تظهر
            "ngrok-skip-browser-warning": "69420"
          }
        });
        
        console.log("Profile Data Received:", response.data);

        // ملئ البيانات في الخانات
        if (response.data) {
          setUserData({
            name: response.data.name || "",
            email: response.data.email || "",
            phone: response.data.phone || "",
            gender: response.data.gender || "",
            profilePic: response.data.profilePic || null
          });
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to load profile data. Make sure the server is Online.");
      }
    };

    document.title = "My Profile";
    window.scrollTo(0, 0);
    fetchProfile();
  }, []);

  const handleImageClick = () => {
    if (isEditMode) fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profilePic: imageUrl });
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setError('');
    setPasswords({ current: '', next: '' });
  };

  // 2. حفظ التعديلات (تطابق مع Swagger سيف)
  const handleSaveProfile = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');

    try {
      // تحديث البيانات الشخصية (PUT)
      await axios.put(API_ENDPOINTS.UPDATE_PROFILE, {
        name: userData.name,
        phone: userData.phone,
        gender: userData.gender,
        profilePic: userData.profilePic
      }, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420"
        }
      });

      // تغيير كلمة المرور (POST) - الأسماء معدلة حسب السواجر
      if (passwords.current && passwords.next) {
        await axios.post(API_ENDPOINTS.CHANGE_PASSWORD, {
          currentPassword: passwords.current, // كما يطلب سيف
          newPassword: passwords.next,        // كما يطلب سيف
          confirmPassword: passwords.next     // كما يطلب سيف
        }, {
          headers: { 
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420"
          }
        });
      }

      setIsEditMode(false);
      setPasswords({ current: '', next: '' });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update Error:", err.response?.data);
      setError(err.response?.data?.message || "Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F9FFF9] font-inter flex flex-col text-[#432818] w-full min-h-screen">
      <main className="flex-grow w-full max-w-7xl mx-auto px-8 md:px-20 py-12 flex flex-col items-center">
        
        <h1 className="text-[40px] md:text-[56px] font-[900] mb-12 text-center w-full">
          My profile
        </h1>

        <div className="flex flex-col items-center relative w-full max-w-2xl">
          
          {isEditMode && (
            <button 
              onClick={handleCancel}
              className="absolute -right-4 md:-right-20 top-0 text-[20px] md:text-[24px] font-[800] underline cursor-pointer"
            >
              Cancel
            </button>
          )}

          <div className="flex flex-col items-center mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#D9D9D9] rounded-full mb-4 shadow-sm overflow-hidden border-2 border-gray-200">
                {userData.profilePic && <img src={userData.profilePic} alt="Profile" className="w-full h-full object-cover" />}
            </div>

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />

            {!isEditMode ? (
              <button 
                onClick={() => setIsEditMode(true)}
                className="text-[18px] font-semibold underline text-[#4B4B4B] hover:text-[#432818] transition-colors"
              >
                Edit profile
              </button>
            ) : (
              <button 
                onClick={handleImageClick}
                className="text-[14px] font-bold text-[#4B4B4B] underline"
              >
                Change profile photo
              </button>
            )}
          </div>

          {error && <p className="text-red-500 mb-5 font-bold animate-pulse text-center w-full">⚠️ {error}</p>}

          <div className="w-full space-y-10">
            {/* عرض الحقول (Name, Email, Phone) */}
            {[
              { label: 'User name', key: 'name', type: 'text' },
              { label: 'Email', key: 'email', type: 'email', disabled: true }, 
              { label: 'Phone number', key: 'phone', type: 'text' }
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-3 relative w-full">
                <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">{field.label}</label>
                {!isEditMode || field.disabled ? (
                  <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] flex items-center min-h-[60px]">
                    {userData[field.key]}
                  </div>
                ) : (
                  <input 
                    type={field.type}
                    value={userData[field.key] || ''}
                    onChange={(e) => setUserData({...userData, [field.key]: e.target.value})}
                    className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] outline-none shadow-sm bg-[#F9FFF9]"
                  />
                )}
              </div>
            ))}

            {/* قسم كلمة المرور */}
            <div className="flex flex-col gap-3 relative w-full">
              <label className="text-[24px] md:text-[28px] font-[700] text-[#432818]">Password</label>
              {!isEditMode ? (
                <div className="w-full p-4 rounded-[15px] border border-gray-300 bg-white text-[18px] flex items-center min-h-[60px]">
                  ••••••••••••
                </div>
              ) : (
                <div className="space-y-6 w-full">
                  <input 
                    type="password" 
                    placeholder="Current password"
                    value={passwords.current}
                    onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                    className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] outline-none bg-[#F9FFF9]"
                  />
                  <input 
                    type="password" 
                    placeholder="New password"
                    value={passwords.next}
                    onChange={(e) => setPasswords({...passwords, next: e.target.value})}
                    className="w-full p-4 rounded-[15px] border border-[#432818] text-[18px] outline-none bg-[#F9FFF9]"
                  />
                </div>
              )}
            </div>

            {/* الجنس */}
            <div className="flex items-center justify-center gap-8 pt-4 text-[18px] font-semibold text-[#432818]">
                <span>Gender:</span>
                <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Male'})}>
                  <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
                    {userData.gender === 'Male' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
                  </div>
                  <span>Male</span>
                </div>
                <div className={`flex items-center gap-2 ${isEditMode ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isEditMode && setUserData({...userData, gender: 'Female'})}>
                  <div className="w-5 h-5 rounded-full border-2 border-[#432818] flex items-center justify-center">
                    {userData.gender === 'Female' && <div className="w-2.5 h-2.5 rounded-full bg-[#432818]"></div>}
                  </div>
                  <span>Female</span>
                </div>
            </div>

            {isEditMode && (
              <div className="pt-10 flex justify-center">
                <button 
                  onClick={handleSaveProfile}
                  disabled={loading}
                  className={`bg-[#432818] text-white text-[20px] font-bold py-3 px-14 rounded-[12px] shadow-md transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`}
                >
                  Save Profile 
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;