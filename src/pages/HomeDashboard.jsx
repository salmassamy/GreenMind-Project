import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 

const HomeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = " Home | Dashboard";
    window.scrollTo(0, 0); 
  }, []);

  const stats = [
    { title: 'Total Orders', value: '2,583' },
    { title: 'Total Products', value: '2,583' },
    { title: 'Total Users', value: '2,583' },
  ];

  const recentActivity = [
    { name: 'Rana ', time: '10:02 AM' },
    { name: 'Mayar', time: '03:30 AM' },
    { name: 'Shrouk', time: '11:13 PM' },
  ];

  const performance = [
    { item: 'Soil', value: '2,583' },
    { item: 'Seeds', value: '2,583' },
    { item: 'Tools', value: '2,583' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FFF9] font-inter text-[#432818] flex flex-col">
      
      <header className="sticky top-0 z-[110] bg-[#F9FFF9] w-full px-8 py-6 flex items-center justify-between md:justify-start gap-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-[28px] font-bold tracking-tight">GreenMindAI</span>
        </div>
        
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <h1 className="text-[32px] md:text-[48px] font-[800] text-center mt-6 mb-4">
        Dashboard
      </h1>

      <div className="flex flex-col md:flex-row px-6 md:px-12 pb-10 items-start gap-10">
        
        <aside className={`
          fixed inset-y-0 left-0 z-[120] w-64 bg-white shadow-xl p-8 transform transition-transform duration-300 ease-in-out
          md:sticky md:top-[100px] md:translate-x-0 md:shadow-sm md:rounded-[25px] md:h-fit md:border md:border-gray-100
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex justify-end md:hidden mb-4">
            <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
          </div>

          <nav className="flex flex-col gap-8">
            <NavLink to="/home-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Dashboard</NavLink>
            <NavLink to="/product-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Products</NavLink>
            <NavLink to="/user-activity" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>User Activity</NavLink>
            <NavLink to="/orders" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Orders</NavLink>
          </nav>
        </aside>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/20 z-[115] md:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}

        <main className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 min-h-[130px] flex flex-col justify-center hover:shadow-md transition-shadow">
                <p className="text-gray-400 text-[18px] font-normal mb-2">{stat.title}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</h2>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
            <div className="flex flex-col gap-8 w-full">
                <div className="bg-white p-6 md:p-8 rounded-[25px] shadow-sm border border-gray-100">
                  <h3 className="text-[22px] md:text-[28px] font-bold mb-8">Recent Activity</h3>
                  <div className="space-y-6">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="flex justify-between items-center text-gray-500 border-b border-gray-50 pb-2">
                        <span className="font-normal text-[18px]">{activity.name}</span>
                        <span className="font-bold text-gray-800 text-[18px]">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[25px] shadow-sm border border-gray-100">
                  <p className="text-gray-400 text-[18px] font-normal mb-4">Today’s Revenue</p>
                  <div className="flex justify-between items-end">
                    <h2 className="text-4xl font-bold text-gray-800">2,583</h2>
                    <div className="text-right">
                      <p className="text-gray-300 text-[12px] font-normal uppercase italic tracking-wider">Monthly Revenue</p>
                      <p className="text-gray-400 font-bold text-[18px]">$36,583</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="w-full">
                <div className="bg-white p-6 md:p-8 rounded-[25px] shadow-sm border border-gray-100">
                  <h3 className="text-[22px] md:text-[28px] font-bold mb-8">Product Performance</h3>
                  <div className="space-y-6">
                    {performance.map((perf, i) => (
                      <div key={i} className="flex justify-between items-center text-gray-500 border-b border-gray-50 pb-2">
                        <span className="font-normal text-[18px]">{perf.item}</span>
                        <span className="font-bold text-gray-800 text-[18px]">{perf.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard;