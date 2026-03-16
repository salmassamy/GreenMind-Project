import React, { useState, useRef, useEffect } from 'react'; 
import { Menu, X, Search, Camera, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import editIcon from '../assets/Edit.png';
import deleteIcon from '../assets/delete.png';
import productImgPlaceholder from '../assets/logo.png'; 

const ProductDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = " Products | Dashboard";
    window.scrollTo(0, 0); 
  }, []);

  const [products, setProducts] = useState([
    { id: '001', image: productImgPlaceholder, name: 'Organic Tomato Seeds', description: 'High-quality organic tomato seeds.', category: 'Seeds', price: '$20' },
    { id: '002', image: productImgPlaceholder, name: 'Coffee Beans', description: 'Premium coffee beans.', category: 'Seeds', price: '$50' },
    { id: '003', image: productImgPlaceholder, name: 'Orange Seeds', description: 'Sweet orange seeds.', category: 'Seeds', price: '$20' },
    { id: '004', image: productImgPlaceholder, name: 'Organic Tomato Seeds', description: 'High-quality seeds.', category: 'Seeds', price: '$20' },
  ]);

  const [newProduct, setNewProduct] = useState({ id: '', name: '', description: '', category: 'Seeds', price: '' });

  const generateNextId = () => {
    if (products.length === 0) return '001';
    const ids = products.map(p => parseInt(p.id));
    return (Math.max(...ids) + 1).toString().padStart(3, '0');
  };

  const handleOpenAddForm = () => {
    setIsEditing(false);
    setNewProduct({ id: generateNextId(), name: '', description: '', category: 'Seeds', price: '' });
    setSelectedImage(null);
    setShowAddForm(true);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.includes(searchQuery)
  );

  const handleSaveProduct = () => {
    const productData = { ...newProduct, image: selectedImage || productImgPlaceholder };
    if (isEditing) {
      setProducts(products.map(p => p.id === selectedRowId ? productData : p));
    } else {
      setProducts([productData, ...products]);
    }
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FFF9] font-inter text-[#432818] flex flex-col">
      <header className="sticky top-0 z-[110] bg-[#F9FFF9] w-full px-8 py-6 flex items-center justify-between md:justify-start gap-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-[22px] md:text-[28px] font-bold tracking-tight">GreenMindAI</span>
        </div>
        <button className="md:hidden p-2 ml-auto cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}><X size={28} /></button>
      </header>

      <div className="flex flex-col md:flex-row px-6 md:px-12 pb-10 items-start gap-10">
        
        <aside className={`fixed inset-y-0 left-0 z-[120] w-64 bg-white shadow-xl p-8 transform transition-transform duration-300 ease-in-out md:sticky md:top-[120px] md:translate-x-0 md:shadow-sm md:rounded-[25px] md:h-fit md:border md:border-gray-100 md:mt-[175px] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="flex flex-col gap-8">
            <NavLink to="/home-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Dashboard</NavLink>
            <NavLink to="/product-dashboard" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Products</NavLink>
            <NavLink to="/user-activity" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>User Activity</NavLink>
            <NavLink to="/orders" className={({ isActive }) => `text-left text-[18px] transition-colors pl-3 ${isActive ? 'text-[#432818] font-bold border-l-4 border-[#432818]' : 'text-gray-400 font-semibold hover:text-[#432818]'}`}>Orders</NavLink>
          </nav>
        </aside>

        {isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-[115] md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}

        <main className="flex-1 w-full pt-10">
          <div className="sticky top-[95px] z-40 bg-[#F9FFF9] pb-4">
            <div className="bg-[#E4F3E4] rounded-[25px] p-6 flex justify-between items-center px-10 border border-[#CDE5CD] mb-8 shadow-sm h-[100px]">
              <h2 className="text-[#432818] text-[28px] md:text-[44px] font-[800]">Products</h2>
              <button onClick={handleOpenAddForm} className="bg-[#D6866E] text-white px-8 py-3 rounded-2xl font-bold text-[18px] cursor-pointer">Add new product</button>
            </div>
            {!showAddForm && (
              <div className="bg-white rounded-[15px] border border-gray-300 flex items-center overflow-hidden shadow-sm">
                <div className="relative flex-1 px-6 py-4 flex items-center border-r border-gray-300">
                  <Search className="text-gray-400 mr-4" size={26} />
                  <input type="text" placeholder="Search Products..." className="w-full bg-transparent text-[20px] outline-none font-medium" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="flex">
                  <button onClick={() => {}} className="px-10 py-4 border-r border-gray-300 hover:bg-gray-50 flex items-center gap-3"><img src={editIcon} className="w-6" alt="" /> <span className="font-semibold text-gray-700">Edit</span></button>
                  <button onClick={() => {}} className="px-10 py-4 hover:bg-red-50 flex items-center gap-3"><img src={deleteIcon} className="w-6" alt="" /> <span className="font-semibold text-gray-700">Delete</span></button>
                </div>
              </div>
            )}
          </div>

          {!showAddForm && (
            <div className="bg-white rounded-[20px] border border-gray-400 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-[#C1D9C1]">
                    <th className="p-5 border border-gray-400 font-bold text-left">Product ID</th>
                    <th className="p-5 border border-gray-400 font-bold text-left">Product</th>
                    <th className="p-5 border border-gray-400 font-bold text-left">Description</th>
                    <th className="p-5 border border-gray-400 font-bold text-left">Category</th>
                    <th className="p-5 border border-gray-400 font-bold text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => (
                    <tr key={p.id} onClick={() => setSelectedRowId(p.id)} className={`cursor-pointer transition-colors ${selectedRowId === p.id ? 'bg-[#F2F9F2]' : 'hover:bg-gray-50'}`}>
                      <td className="p-5 border border-gray-300 text-gray-600">{p.id}</td>
                      <td className="p-5 border border-gray-300 flex items-center gap-4">
                        <img src={p.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                        <span className="font-semibold text-[#432818]">{p.name}</span>
                      </td>
                      <td className="p-5 border border-gray-300 text-gray-500 truncate max-w-xs">{p.description}</td>
                      <td className="p-5 border border-gray-300 text-gray-600">{p.category}</td>
                      <td className="p-5 border border-gray-300 font-bold text-gray-700">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductDashboard;