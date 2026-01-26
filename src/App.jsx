import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectionEntry from './pages/SelectionEntry';
import ArticlePage from './pages/ArticlePage';
import SignUp from './pages/SignUp'; 
import Login from './pages/Login'; 
import HomeDashboard from './pages/HomeDashboard'; 
import ProductDashboard from './pages/ProductDashboard'; 

function AppContent() {
  const location = useLocation();
  
  const noHeaderFooterPages = [
    '/login', 
    '/signup', 
    '/selection', 
    '/home-dashboard', 
    '/product-dashboard' 
  ];

  const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* الهيدر مش هيظهر في صفحات الدخول أو الداشبورد */}
      {!hideHeaderFooter && <Header />}
      
      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<ArticlePage />} /> 
          <Route path="/articles" element={<ArticlePage />} />
          
          {/* Authentication */}
          <Route path="/selection" element={<SelectionEntry />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route path="/home-dashboard" element={<HomeDashboard />} />
          <Route path="/product-dashboard" element={<ProductDashboard />} />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;