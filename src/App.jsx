import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectionEntry from './pages/SelectionEntry';
import ArticlePage from './pages/ArticlePage';
import SignUp from './pages/SignUp'; 
import Login from './pages/Login'; 

function AppContent() {
  const location = useLocation();
  
  // الهيدر والفوتر هيظهروا في المقالات وهيختفوا في الباقي
  const isAuthPage = ['/login', '/signup', '/selection'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ArticlePage />} /> 
          
          <Route path="/selection" element={<SelectionEntry />} />
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
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