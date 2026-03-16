import React, { useState, useEffect } from 'react'; 
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Orders = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    document.title = "Orders | Dashboard";
    window.scrollTo(0, 0); 
  }, []);

  const [orders] = useState([
    { id: '001', customer: 'Salma', date: '20/02/2026', price: '250', status: 'Delivered' },
    { id: '002', customer: 'Mayar', date: '21/02/2026', price: '450', status: 'Shipped' },
    { id: '003', customer: 'Tasnim ', date: '22/02/2026', price: '1200', status: 'Pending' },
    { id: '004', customer: 'Mohamed', date: '23/02/2026', price: '85', status: 'Canceled' },
    { id: '005', customer: 'Shrouk', date: '24/02/2026', price: '320', status: 'Delivered' },
    { id: '006', customer: 'Rehab', date: '25/02/2026', price: '990', status: 'Shipped' },
    { id: '007', customer: 'Seif ', date: '26/02/2026', price: '990', status: 'Canceled' },
  ]);

  const filteredOrders = orders.filter(order => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      order.id.toLowerCase().includes(query) || 
      order.customer.toLowerCase().includes(query);
    
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#F9FFF9] font-inter text-[#432818]">
      
      {/* Header - Sticky */}
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
        
{/* sider */}
        <aside className={`
          fixed inset-y-0 left-0 z-[120] w-64 bg-white shadow-xl p-8 transform transition-transform duration-300 ease-in-out
          md:sticky md:top-[120px] md:z-50 md:translate-x-0 md:shadow-sm md:rounded-[25px] md:h-fit md:border md:border-gray-100 
          md:mt-[175px] 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex justify-end md:hidden mb-4">
            <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
          </div>

          <nav className="flex flex-col gap-8">
            <NavLink onClick={() => setIsSidebarOpen(false)} to="/home-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Dashboard</NavLink>
            <NavLink onClick={() => setIsSidebarOpen(false)} to="/product-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Products</NavLink>
            <NavLink onClick={() => setIsSidebarOpen(false)} to="/user-activity" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>User Activity</NavLink>
            <NavLink onClick={() => setIsSidebarOpen(false)} to="/orders" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Orders</NavLink>
          </nav>
        </aside>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/20 z-[115] md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
        )}

        <main className="flex-1 w-full pt-10">
          <div className="sticky top-[95px] z-40 bg-[#F9FFF9] pb-4">
            <div className="bg-[#E4F3E4] rounded-[25px] p-6 flex justify-start items-center px-10 border border-[#CDE5CD] mb-8 shadow-sm h-[100px]">
              <h2 className="text-[#432818] text-[28px] md:text-[44px] font-[800]">Orders</h2>
            </div>

            <div className="bg-white rounded-[15px] border border-gray-300 flex flex-row items-center overflow-hidden shadow-sm">
              <div className="relative flex-grow border-r border-gray-300 px-6 py-4 flex items-center">
                <Search className="text-gray-400 mr-4" size={26} />
                <input 
                  type="text" 
                  placeholder="Search Order ID or Customer Name..." 
                  className="w-full bg-transparent text-[16px] md:text-[20px] outline-none font-medium" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>
              
              <div className="relative w-[130px] md:w-[180px] px-4 md:px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                <select 
                  className="w-full bg-transparent text-[14px] md:text-[18px] font-bold text-gray-500 outline-none appearance-none cursor-pointer" 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">Filter</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Canceled">Canceled</option>
                </select>
                <ChevronDown className="text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-[20px] overflow-hidden border border-gray-400 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#C1D9C1]">
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center">Order ID</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center">Customer</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center">Date</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center">Total Price</th>
                  <th className="p-5 border border-gray-400 font-bold text-[#432818] text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors h-[60px]">
                    <td className="p-5 border border-gray-300 text-center text-gray-600">{order.id}</td>
                    <td className="p-5 border border-gray-300 text-center text-gray-600 font-semibold">{order.customer}</td>
                    <td className="p-5 border border-gray-300 text-center text-gray-600">{order.date}</td>
                    <td className="p-5 border border-gray-300 text-center text-gray-600 font-[900]">${order.price}</td>
                    <td className="p-5 border border-gray-300 text-center text-gray-500 font-bold">{order.status}</td>
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

export default Orders;