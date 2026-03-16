import React, { useState, useEffect } from 'react'; 
import { Search, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const UserActivity = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = " User Activity | Dashboard";
    window.scrollTo(0, 0); 
  }, []);

  const activities = [
    { 
      date: '23/2/2026', 
      logs: [
        { time: '01:00 Am - 02:00 Am', action: 'User: Rana - Logged In & Crop Recommendation' },
        { time: '11:30 Pm - 12:30 Am', action: 'User: Yara - Disease Detection ' },
        { time: '09:00 Pm - 10:30 Pm', action: 'User: Mayar - Purchased Organic Fertilizer' }
      ]
    },
    { 
      date: '24/2/2026', 
      logs: [
        { time: '01:00 Am - 02:00 Am', action: 'User: Rana - Logged In & Crop Recommendation' },
        { time: '11:30 Pm - 12:30 Am', action: 'User: Yara - Disease Detection ' },
        { time: '09:00 Pm - 10:30 Pm', action: 'User: Mayar - Purchased Organic Fertilizer' }
      ]
    },
    { 
      date: '25/2/2026', 
      logs: [
        { time: '01:00 Am - 02:00 Am', action: 'User: Rana - Logged In & Crop Recommendation' },
        { time: '11:30 Pm - 12:30 Am', action: 'User: Yara - Disease Detection' },
      ]
    }
  ];

  const filteredActivities = activities.map(day => {
    const filteredLogs = day.logs.filter(log => 
      log.action.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...day, logs: filteredLogs };
  }).filter(day => day.logs.length > 0); 

  return (
    <div className="min-h-screen bg-[#F9FFF9] font-inter text-[#432818]">
      
      {/* Header */}
      <header className="sticky top-0 z-[110] bg-[#F9FFF9] w-full px-8 py-6 flex items-center justify-between md:justify-start gap-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-[22px] md:text-[28px] font-bold tracking-tight">GreenMindAI</span>
        </div>
        
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <div className="flex flex-col md:flex-row px-6 md:px-12 pb-10 items-start gap-10">
        
        <aside className={`
          fixed inset-y-0 left-0 z-[120] w-64 bg-white shadow-xl p-8 transform transition-transform duration-300 ease-in-out
          md:sticky md:top-[120px] md:z-50 md:translate-x-0 md:shadow-sm md:rounded-[25px] md:h-fit md:border md:border-gray-100 
          md:mt-[175px] 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="flex flex-col gap-8">
            <NavLink to="/home-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Dashboard</NavLink>
            <NavLink to="/product-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Products</NavLink>
            <NavLink to="/user-activity" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>User Activity</NavLink>
            <NavLink to="/orders" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Orders</NavLink>
          </nav>
        </aside>

        <main className="flex-1 w-full pt-10">
          {/*  Heading */}
          <div className="bg-[#F9FFF9] pb-4">
            <div className="bg-[#E4F3E4] rounded-[25px] p-6 flex justify-start items-center px-10 border border-[#CDE5CD] mb-8 shadow-sm h-[100px]">
              <h2 className="text-[#432818] text-[28px] md:text-[44px] font-[800]">User Activity</h2>
            </div>

            <div className="bg-white rounded-[15px] border border-gray-300 mb-8 px-6 py-4 flex items-center shadow-sm">
              <Search className="text-gray-400 mr-4" size={26} />
              <input 
                type="text" 
                placeholder="Search by User Name..." 
                className="w-full bg-transparent text-[20px] outline-none font-medium" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-[20px] overflow-hidden border border-gray-400 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#C1D9C1]">
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center w-1/4">Date</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center w-[30%]">Time</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center w-[45%]">Activity</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((day, dayIndex) => (
                  <tr key={dayIndex} className="hover:bg-gray-50 transition-colors">
                    <td className="p-5 border border-gray-300 text-gray-800 font-bold text-center align-middle">{day.date}</td>
                    <td className="p-0 border border-gray-300">
                      {day.logs.map((log, i) => (
                        <div key={i} className="px-5 py-4 text-center font-semibold text-gray-600 border-b border-gray-100 last:border-0 h-[65px] flex items-center justify-center">
                          {log.time}
                        </div>
                      ))}
                    </td>
                    <td className="p-0 border border-gray-300">
                      {day.logs.map((log, i) => (
                        <div key={i} className="px-5 py-4 text-gray-700 font-medium border-b border-gray-100 last:border-0 h-[65px] flex items-center">
                          {log.action}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserActivity;