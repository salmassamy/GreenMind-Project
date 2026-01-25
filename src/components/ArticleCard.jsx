

// import React from 'react';

// function ArticleCard({ title, description, imageUrl, link }) {
//   return (
//     <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 font-inter">
//       <div className="w-full h-64 overflow-hidden">
//         <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
//       </div>

//       <div className="p-5 md:p-8 flex flex-col flex-grow text-left">
//         <h3 className="text-[22px] md:text-[28px] font-bold text-secondary mb-4 leading-tight">
//           {title}
//         </h3>

//         <p className="text-[16px] md:text-[18px] font-normal text-text-muted mb-6 md:mb-8 flex-grow leading-relaxed">
//           {description}
//         </p>

//         <a 
//           href={link} 
//           className="w-full md:w-auto inline-block bg-[#683A2F] text-white py-3 px-10 rounded-xl font-bold text-[18px] shadow-md hover:bg-[#522e25] self-start transition-all no-underline text-center"
//         >
//           read more
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ArticleCard;



import React from 'react';

function ArticleCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 font-inter">
      
      <div className="w-full h-52 md:h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
        
        <h3 className="text-[28px] font-bold text-secondary mb-4 leading-tight min-h-[64px]">
          {title}
        </h3>

        <p className="text-[18px] font-normal text-text-muted mb-8 flex-grow leading-relaxed">
          {description}
        </p>

        <a 
          href={link} 
          className="w-full md:w-auto inline-block bg-[#683A2F] text-white py-3 px-10 rounded-xl font-bold text-[18px] shadow-md hover:bg-[#522e25] self-start transition-all no-underline text-center"
        >
          read more
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;