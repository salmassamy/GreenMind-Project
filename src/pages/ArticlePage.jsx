

// import React from 'react';
// import ArticleCard from '../components/ArticleCard';
// import articleImg from '../assets/Article Image.png'; 

// function ArticlePage() {
//   const articles = [
//     { id: 1, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 2, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 3, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 4, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 5, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 6, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 7, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F7FEF4] font-inter pt-10 md:pt-16 pb-20">
//       <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        
//         <div className="flex flex-col items-center text-center">
//           <h2 className="text-[20px] md:text-[28px] font-bold text-[#683A2F] uppercase tracking-[0.1em] md:tracking-[0.2em] mb-1">
//             Reader's Choice
//           </h2>
          
//           <p className="text-[16px] md:text-[18px] font-normal text-[#4B4B4B] max-w-[850px] leading-relaxed mb-10 md:mb-16">
//             This month's most popular article is: 
//             <span className="font-semibold text-[#683A2F]"> "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</span>
//           </p>

//           <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[20px] md:rounded-[40px] overflow-hidden shadow-xl mb-16">
//             <div className="py-4 md:py-6 text-center">
//                <span className="text-[18px] md:text-[22px] font-bold text-[#683A2F] uppercase tracking-widest">Featured Today</span>
//             </div>
            
//             <div className="w-full h-[250px] md:h-[500px] overflow-hidden">
//               <img src={articleImg} alt="Featured" className="w-full h-full object-cover shadow-inner" />
//             </div>

//             <div className="p-6 md:p-12 flex flex-col items-center">
//               <p className="text-[18px] md:text-[22px] text-[#4B4B4B] font-medium mb-8 md:mb-10 max-w-[750px] leading-relaxed">
//                 Learn easy ways to protect soil, save water, and grow sustainably.
//               </p>
//               <button className="w-full md:w-auto bg-[#683A2F] text-white py-3 md:py-4 px-10 md:px-24 rounded-2xl font-bold text-[18px] md:text-[20px] shadow-lg hover:bg-[#522e25] transition-all">
//                 Read more
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-10 md:mb-16 flex flex-col items-center w-full">
//             <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#683A2F] relative inline-block mb-2 text-center">
//               Articles
//             </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
//           {articles.map((art) => (
//             <ArticleCard 
//               key={art.id} 
//               title={art.title} 
//               description={art.description} 
//               imageUrl={articleImg} 
//               link="#" 
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ArticlePage;

import React from 'react';
import ArticleCard from '../components/ArticleCard';
import articleImg from '../assets/Article Image.png'; 

function ArticlePage() {
  const articles = [
    { id: 1, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 2, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 3, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 4, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 5, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 6, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
    { id: 7, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
  ];

  return (
    <div className="min-h-screen bg-[#F7FEF4] font-inter pt-10 md:pt-16 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        
        <div className="flex flex-col items-center text-center">
          {/* H3 - Reader's Choice Section - 28px Bold (700) */}
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#683A2F] uppercase tracking-[0.1em] md:tracking-[0.2em] mb-1">
            Reader's Choice
          </h2>
          
          {/* Body - 18px Regular (400) */}
          <p className="text-[16px] md:text-[18px] font-normal text-[#4B4B4B] max-w-[850px] leading-relaxed mb-10 md:mb-16">
            This month's most popular article is: 
            <span className="font-semibold text-[#683A2F]"> "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</span>
          </p>

          <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[25px] md:rounded-[40px] overflow-hidden shadow-xl mb-20">
            <div className="py-3 md:py-4 text-center">
               {/* H4 Style used for Card Sub-headers - 24px Bold (700) */}
               <span className="text-[18px] md:text-[24px] font-bold text-[#683A2F] uppercase tracking-widest">
                 Featured Today
               </span>
            </div>
            
            <div className="w-full h-[220px] md:h-[350px] overflow-hidden">
              <img 
                src={articleImg} 
                alt="Featured" 
                className="w-full h-full object-cover shadow-inner" 
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col items-center">
              {/* Body Style - 18px Regular (400) - Note: Medium (500) used for emphasis but maintaining 18px */}
              <p className="text-[16px] md:text-[18px] text-[#4B4B4B] font-medium mb-6 md:mb-8 max-w-[750px] leading-relaxed">
                Learn easy ways to protect soil, save water, and grow sustainably.
              </p>
              {/* Navigation Style for Button - 18px Semi-Bold (600) */}
              <button className="w-full md:w-auto bg-[#683A2F] text-white py-3 md:py-3.5 px-12 md:px-24 rounded-2xl font-semibold text-[18px] shadow-lg hover:bg-[#522e25] transition-all">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-16 flex flex-col items-center w-full">
            {/* H2 - Articles Section - 48px Extra Bold (800) */}
            <h2 className="text-[32px] md:text-[48px] font-[800] text-[#683A2F] relative inline-block mb-2 text-center">
              Articles
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {articles.map((art) => (
            <ArticleCard 
              key={art.id} 
              title={art.title} 
              description={art.description} 
              imageUrl={articleImg} 
              link="#" 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default ArticlePage;