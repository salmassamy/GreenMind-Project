import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectionEntry from './pages/SelectionEntry';
import ArticlePage from './pages/ArticlePage';
import SignUp from './pages/SignUp'; 

function AppContent() {
  const location = useLocation();
 
  const isAuthPage = ['/', '/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          
          <Route path="/" element={<SelectionEntry />} />
          
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
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