// import React, { useState } from 'react';
// import { Menu, X, Search, Plus } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; 
// import editIcon from '../assets/Edit.png';
// import deleteIcon from '../assets/delete.png';

// const ProductDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const products = [
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//     { name: 'Organic Tomato Seeds', category: '', price: '' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F9FFF9] font-inter">
      
//       {/* 1. Header */}
//       <header className="w-full bg-transparent px-8 py-6 flex items-center justify-between md:justify-start gap-3">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
//           {/* H3 Style - 28px Bold (700) */}
//           <span className="text-[#432818] text-[28px] font-bold">GreenMindAI</span>
//         </div>
//         <button className="md:hidden p-2 text-[#432818]" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </header>

//       <div className="flex flex-col md:flex-row px-6 md:px-10 pb-10 items-start gap-8">
        
//         {/* 2. Sidebar */}
//         <aside className={`
//           fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm p-8 transform transition-transform duration-300 
//           md:relative md:translate-x-0 md:rounded-[25px] md:h-fit border border-gray-100
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//         `}>
//           <nav className="flex flex-col gap-8">
//             <Link to="/home-dashboard" className="text-left text-gray-400 font-semibold text-[18px] hover:text-[#432818] transition-colors">
//               Dashboard
//             </Link>
//             <Link to="/product-dashboard" className="text-left text-[#432818] font-bold text-[18px] border-l-4 border-[#432818] pl-3">
//               Products
//             </Link>
//             <button className="text-left text-gray-400 font-semibold text-[18px]">User Activity</button>
//             <button className="text-left text-gray-400 font-semibold text-[18px]">Orders</button>
//           </nav>
//         </aside>

//         {/* 3. Main Content Area */}
//         <main className="flex-1 w-full">
//           {/*  Title */}
//           <div className="bg-[#D9F2D9] rounded-[20px] p-4 flex justify-between items-center mb-6 px-8 border border-[#B8D8B8]">
//             <h2 className="text-[#432818] text-[28px] md:text-[48px] font-[800]">Products & Store</h2>
//             <button className="bg-[#D6866E] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold text-[18px]">
//               <Plus size={20} /> Add new product
//             </button>
//           </div>

//           {/* Search & Actions */}
//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
//               <input 
//                 type="text" 
//                 placeholder="Product Name" 
//                 className="w-full bg-white border border-gray-300 rounded-[12px] py-3 pl-12 pr-4 text-[18px] outline-none focus:ring-1 focus:ring-green-200 font-normal"
//               />
//             </div>
//             <div className="flex gap-0 overflow-hidden rounded-[12px] border border-gray-300 bg-white shadow-sm">
//               <button className="flex items-center gap-2 px-8 py-3 hover:bg-gray-50 border-r border-gray-300 text-[18px] font-semibold text-gray-700 transition-colors">
//                 <img src={editIcon} alt="Edit" className="w-5 h-5 object-contain" /> 
//                 Edit
//               </button>
//               <button className="flex items-center gap-2 px-8 py-3 hover:bg-gray-50 text-[18px] font-semibold text-gray-700 transition-colors">
//                 <img src={deleteIcon} alt="Delete" className="w-5 h-5 object-contain" /> 
//                 Delete
//               </button>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="bg-white rounded-[15px] overflow-hidden border border-gray-300 shadow-sm">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-[#C1D9C1]">
//                   <th className="p-4 border border-gray-400 text-[18px] font-semibold text-gray-800">Product Name</th>
//                   <th className="p-4 border border-gray-400 text-[18px] font-semibold text-gray-800">Category</th>
//                   <th className="p-4 border border-gray-400 text-[18px] font-semibold text-gray-800">Price Range</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((p, i) => (
//                   <tr key={i} className="hover:bg-gray-50 transition-colors">
//                     <td className="p-4 border border-gray-300 text-[18px] font-normal text-gray-700">{p.name}</td>
//                     <td className="p-4 border border-gray-300 text-[18px] font-normal text-gray-700">{p.category}</td>
//                     <td className="p-4 border border-gray-300 text-[18px] font-normal text-gray-700">{p.price}</td>
//                   </tr>
//                 ))}
//                 {[...Array(4)].map((_, i) => (
//                   <tr key={`empty-${i}`} className="h-12">
//                     <td className="border border-gray-300"></td>
//                     <td className="border border-gray-300"></td>
//                     <td className="border border-gray-300"></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>

//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/10 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default ProductDashboard;


import React, { useState } from 'react';
import { Menu, X, Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import editIcon from '../assets/Edit.png';
import deleteIcon from '../assets/delete.png';

const ProductDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FFF9] font-inter text-[#432818]">
      
      {/* 1. Header - H3 = 28px Bold */}
      <header className="w-full bg-transparent px-8 py-6 flex items-center justify-between md:justify-start gap-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="text-[28px] font-bold tracking-tight">GreenMindAI</span>
        </div>
        <button className="md:hidden p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <div className="flex flex-col md:flex-row px-6 md:px-10 pb-10 items-start gap-8">
        
        {/* 2. Sidebar - Body = 18px */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm p-8 transform transition-transform duration-300 
          md:relative md:translate-x-0 md:rounded-[25px] md:h-fit border border-gray-100
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="flex flex-col gap-8">
            <Link to="/home-dashboard" className="text-left text-gray-400 font-semibold text-[18px] hover:text-[#432818] transition-colors">
              Dashboard
            </Link>
            <Link to="/product-dashboard" className="text-left text-[#432818] font-bold text-[18px] border-l-4 border-[#432818] pl-3">
              Products
            </Link>
            <button className="text-left text-gray-400 font-semibold text-[18px] hover:text-[#432818] transition-colors">User Activity</button>
            <button className="text-left text-gray-400 font-semibold text-[18px] hover:text-[#432818] transition-colors">Orders</button>
          </nav>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 w-full">
          {/* Title Bar - H2 = 48px Extra Bold (800) */}
          <div className="bg-[#D9F2D9] rounded-[20px] p-4 flex justify-between items-center mb-8 px-8 border border-[#B8D8B8]">
            <h2 className="text-[28px] md:text-[48px] font-[800]">Products & Store</h2>
            <button className="bg-[#D6866E] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:brightness-110 transition-all font-bold text-[18px]">
              <Plus size={20} /> Add new product
            </button>
          </div>

          {/* Search & Actions - المستطيل الأبيض الموحد */}
          <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-2 mb-8 flex flex-col md:flex-row items-center overflow-hidden">
            {/* جزء البحث */}
            <div className="relative flex-1 w-full md:border-r border-gray-300">
              <div className="flex items-center px-4 py-2">
                <Search className="text-gray-400 mr-3" size={24} />
                <input 
                  type="text" 
                  placeholder="Product Name" 
                  className="w-full bg-transparent text-[18px] font-normal outline-none placeholder-gray-300"
                />
              </div>
            </div>
            
            {/* جزء الأزرار (تعديل وحذف) */}
            <div className="flex w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-3 hover:bg-gray-50 border-r border-gray-300 transition-colors">
                <img src={editIcon} alt="Edit" className="w-6 h-6 object-contain" />
                <span className="text-[18px] font-semibold text-gray-700">Edit</span>
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-3 hover:bg-gray-50 transition-colors">
                <img src={deleteIcon} alt="Delete" className="w-6 h-6 object-contain" />
                <span className="text-[18px] font-semibold text-gray-700">Delete</span>
              </button>
            </div>
          </div>

          {/* تم حذف الجدول بناءً على طلبك */}
        </main>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/10 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default ProductDashboard;