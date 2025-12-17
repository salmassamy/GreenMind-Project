import React from 'react';
import ArticleCard from '../components/ArticleCard';
import articleImage from '../assets/Article Image.png'; 

const ARTICLES_DATA = [
 { id: 1, title: "How Technology Helps Farmers Grow Smarter?", description: "The world's farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production and eroding soil quality.", link: "#", imageUrl: articleImage },
 { id: 2, title: "How Technology Helps Farmers Grow Smarter?", description: "The world's farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production and eroding soil quality.", link: "#", imageUrl: articleImage },
 { id: 3, title: "How Technology Helps Farmers Grow Smarter?", description: "The world's farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production and eroding soil quality.", link: "#", imageUrl: articleImage },
];

function ArticlePage() {
 return (
 <div className="article-page-layout">

    <h2 className="readers-choice-title">Reader's Choice</h2>
    <p className="readers-choice-subtitle">This month's most popular article is: "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</p>

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

    <h2 className="readers-choice-title">Article</h2>
    <p className="readers-choice-subtitle">This month's most popular article is: "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</p>

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