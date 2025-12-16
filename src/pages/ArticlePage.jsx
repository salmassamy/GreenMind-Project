




import React from 'react';
import ArticleCard from '../components/ArticleCard';

import articleImage from '../assets/Article Image.png'; 

const ARTICLES_DATA = [
 { id: 1, title: "How Technology Helps Farmers Grow Smarter?", description: "The world's farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production and eroding soil quality.", link: "#", imageUrl: articleImage },
 { id: 2, title: "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs.", description: "A detailed look into how machine learning models can accurately predict nutrient requirements, optimizing yield and reducing waste.", link: "#", imageUrl: articleImage },
 { id: 3, title: "Learn easy ways to protect soil, save water, and grow sustainably.", description: "Simple, practical tips for the modern farmer to enhance sustainability and ensure long-term productivity of their land.", link: "#", imageUrl: articleImage },
];

function ArticlePage() {
 return (
 <div className="article-page-layout">

<h2 className="page-title">Reader's Choice</h2>
<p className="page-subtitle">This month's most popular article is: "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</p>

 <div className="featured-today-box"> 
            
            <h3 className="featured-main-title">FEATURED TODAY</h3>
            
 <div className="featured-image-wrapper">
                <img src={articleImage} alt="Featured Article" className="featured-image" />
</div>
            
            <div className="featured-bottom-content">
                <p>Learn easy ways to protect soil, save water, and grow sustainably.</p>
                <a href="#" className="read-more-featured">Read more</a>
            </div>

 </div>

 <h2 className="page-title article-section-title">Article</h2>
 <p className="page-subtitle article-section-subtitle">This month's most popular article is: "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</p>


 <div className="articles-grid">
 {ARTICLES_DATA.map(article => (
<ArticleCard 
 key={article.id}
title={article.title}
 description={article.description}
 link={article.link}
imageUrl={article.imageUrl} 
 />
 ))}
 </div>

 </div>
 );
}
export default ArticlePage;