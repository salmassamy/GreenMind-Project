import React from 'react';

function ArticleCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="w-full h-64 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-[28px] font-bold text-secondary mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-[18px] font-normal text-text-muted mb-8 flex-grow leading-relaxed">
          {description}
        </p>

        <a 
          href={link} 
          className="inline-block bg-[#683A2F] text-white py-3 px-10 rounded-xl font-bold text-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-[#522e25] self-start transition-all  no-underline text-center"
        >
          read more
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;



