import React from 'react';
import Header from './components/Header';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer';

import '/src/styles/Header.css'; 
import '/src/styles/ArticleCard.css'; 
import '/src/styles/ArticlePage.css'; 
import '/src/styles/Footer.css'; 

function App() {
  return (
    <div className="app-container"> 
      <Header />
      <main>
        <ArticlePage />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;