// import React from 'react';
// import ArticleCard from '../components/ArticleCard';
// import articleImg from '../assets/Article Image.png'; 

// function ArticlePage() {
//   const articles = [
//     { id: 1, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 2, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//     { id: 3, title: "How Technology Helps Farmers Grow Smarter?", description: "The world’s farmers are racing to adapt to the changing climate. More extreme floods and droughts are interrupting production." },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F7FEF4] font-inter pt-32 pb-20">
//       <div className="max-w-[1440px] mx-auto px-10">
        
//         {/*  Reader's Choice Section  */}
//         <div className="flex flex-col items-center text-center mb-24">
//           <h2 className="text-[28px] font-bold text-[#683A2F] uppercase tracking-[0.2em] mb-4">
//             Reader's Choice
//           </h2>
          
//           <p className="text-[18px] font-normal text-[#4B4B4B] max-w-[850px] leading-relaxed mb-12">
//             This month's most popular article is: 
//             <span className="font-semibold text-[#683A2F]"> "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</span>
//           </p>

//           {/* (Featured Box) */}
//           <div className="w-full max-w-[1000px] bg-[#D9BDB4] rounded-[40px] overflow-hidden shadow-xl border border-[#683A2F]/5">
//             <div className="py-5 bg-[#D9BDB4]">
//                <span className="text-[22px] font-bold text-[#683A2F] uppercase tracking-widest">Featured Today</span>
//             </div>
            
//             <div className="w-full h-[500px] overflow-hidden">
//               <img 
//                 src={articleImg} 
//                 alt="Featured Article" 
//                 className="w-full h-full object-cover shadow-inner"
//               />
//             </div>

//             <div className="p-12 flex flex-col items-center bg-[#E5D1CA]/40">
//               <p className="text-[22px] text-[#4B4B4B] font-medium mb-10 max-w-[750px] leading-snug">
//                 Learn easy ways to protect soil, save water, and grow sustainably.
//               </p>
              
//               <button className="bg-[#683A2F] text-white py-4 px-24 rounded-2xl font-bold text-[20px] shadow-[0_6px_15px_rgba(0,0,0,0.2)] hover:bg-[#522e25] transition-all  tracking-wide">
//                 Read more
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mb-16 flex flex-col items-center">
//             <h2 className="text-[48px] font-extrabold text-[#683A2F]  relative inline-block">
//               Articles
//               <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#4CAF50] rounded-full"></span>
//             </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
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
    <div className="min-h-screen bg-[#F7FEF4] font-inter pt-16 pb-20">
      <div className="max-w-[1440px] mx-auto px-10">
        
        <div className="flex flex-col items-center text-center">
          
          <h2 className="text-[28px] font-bold text-[#683A2F] uppercase tracking-[0.2em] mb-1">
            Reader's Choice
          </h2>
          
          <p className="text-[18px] font-normal text-[#4B4B4B] max-w-[850px] leading-relaxed mb-16">
            This month's most popular article is: 
            <span className="font-semibold text-[#683A2F]"> "Why AI is the Best Tool for Predicting Wheat's Nitrogen Needs."</span>
          </p>

          <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[40px] overflow-hidden shadow-xl border border-[#683A2F]/5 mb-16">
            <div className="py-6 text-center">
               <span className="text-[22px] font-bold text-[#683A2F] uppercase tracking-widest">Featured Today</span>
            </div>
            
            <div className="w-full h-[500px] overflow-hidden">
              <img 
                src={articleImg} 
                alt="Featured Article" 
                className="w-full h-full object-cover shadow-inner" 
              />
            </div>

            <div className="p-12 flex flex-col items-center">
              <p className="text-[22px] text-[#4B4B4B] font-medium mb-10 max-w-[750px] leading-relaxed">
                Learn easy ways to protect soil, save water, and grow sustainably.
              </p>
              <button className="bg-[#683A2F] text-white py-4 px-24 rounded-2xl font-bold text-[20px] shadow-lg hover:bg-[#522e25] transition-all">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16 flex flex-col items-center w-full">
            <h2 className="text-[48px] font-extrabold text-[#683A2F] relative inline-block mb-2">
              Articles
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
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