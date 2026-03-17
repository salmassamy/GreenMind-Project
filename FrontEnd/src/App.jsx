import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar'; 

function AppContent() {
  const location = useLocation();
  
  // الصفحات ال مش هظهر فيها الهيدر والفوتر والبار السفلي
  const noHeaderFooterPages = [
    '/login', 
    '/signup',
    '/forgot-password'
  ];

  const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* ظهور الهيدر بناءً على الصفحة */}
      {!hideHeaderFooter && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          {/* الصفحة الرئيسية مؤقتاً*/}
          <Route path="/" element={<div className="p-10 text-center">Home Page (Coming Soon)</div>} />
          
          {/* هنا هنضيف باقي الصفحات (Login, Signup, etc.) */}
        </Routes>
      </main>

      {/* ظهور الفوتر والبار السفلي بناءً على الصفحة */}
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <BottomBar />}
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