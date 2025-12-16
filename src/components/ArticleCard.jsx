import React from 'react';

function ArticleCard({ title, description, link, imageUrl }) { 
  return (
    <div className="article-card">
      
      <div className="card-image-wrapper"> 
          <img src={imageUrl} alt={title} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3> 
        <p className="card-description">{description}</p>
        
        <a href={link} className="read-more-button">
          read more
        </a>
      </div>
    </div>
  );
}
export default ArticleCard;


