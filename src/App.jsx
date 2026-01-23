import React from 'react';
import Header from './components/Header';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer';

function App() {
  return (
    // bg-bg-green: عشان نضمن إن خلفية الموقع كله هي اللون اللي اخترتيه
    <div className="min-h-screen bg-bg-green"> 
      <Header />
      
      <main>
        <ArticlePage />
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;