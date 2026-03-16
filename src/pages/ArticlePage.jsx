

// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';
// import ArticleCard from '../components/ArticleCard';
// import articleImg from '../assets/Article Image.png'; 
// import { API_ENDPOINTS } from '../api/endpoints'; 

// function ArticlePage() {
//   const [featured, setFeatured] = useState(null); 
//   const [articlesList, setArticlesList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // 4. دالة جلب البيانات من السيرفر
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(API_ENDPOINTS.GET_ARTICLES, {
//           headers: {
//             "ngrok-skip-browser-warning": "69420" // لتخطي رسالة تحذير ngrok
//           }
//         });

//         if (response.data) {
//           setFeatured(response.data.featuredArticle);
//           setArticlesList(response.data.allArticles);
//         }
//       } catch (err) {
//         console.error("Fetch Error:", err);
//         setError("Failed to load articles.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     document.title = "Articles";
//     window.scrollTo(0, 0); 
//     fetchArticles();
//   }, []);

//   if (loading) return <div className="text-center py-20 text-[#683A2F] font-bold">Loading Articles...</div>;
//   if (error) return <div className="text-center py-20 text-red-500 font-bold">⚠️ {error}</div>;

//   return (
//     <div className="bg-[#F7FEF4] pt-10 md:pt-16 pb-20 px-5 md:px-10">
//       <div className="max-w-[1440px] mx-auto">
        
//         {featured && (
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-[22px] md:text-[28px] font-bold text-[#683A2F] uppercase mb-1">
//               Reader's Choice
//             </h2>
//             <p className="text-[16px] md:text-[18px] text-[#4B4B4B] mb-10">
//               This month's most popular article is: <span className="font-semibold text-[#683A2F]">"{featured.title}"</span>
//             </p>

//             <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[40px] overflow-hidden shadow-xl mb-20">
//               <div className="py-4 text-center font-bold text-[#683A2F] uppercase tracking-widest text-xl">
//                 Featured Today
//               </div>
//               <img src={featured.imageUrl || articleImg} alt="Featured" className="w-full h-[350px] object-cover" />
//               <div className="p-8">
//                 <p className="text-[#4B4B4B] mb-8">{featured.description}</p>
//                 <a 
//                   href={featured.url || "#"} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-[#683A2F] text-white py-3 px-12 rounded-2xl font-bold transition-all inline-block no-underline"
//                 >
//                   Read more
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}

//         <h2 className="text-center text-[48px] font-black text-[#683A2F] mb-16">Articles</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {articlesList.map((art) => (
//             <ArticleCard 
//               key={art.id} 
//               title={art.title} 
//               description={art.description} 
//               imageUrl={art.imageUrl || articleImg} 
//               link={art.url || "#"} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ArticlePage;



// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';
// import ArticleCard from '../components/ArticleCard';
// import articleImg from '../assets/Article Image.png'; 
// import { API_ENDPOINTS } from '../api/endpoints';

// function ArticlePage() {
//   const [featured, setFeatured] = useState(null); 
//   const [articlesList, setArticlesList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(API_ENDPOINTS.GET_ARTICLES, {
//           headers: {
//             "ngrok-skip-browser-warning": "69420" //   عشان ngrok ميبعتش HTML تاني
//           }
//         });

//         if (response.data) {
//           setFeatured(response.data.featuredArticle || null);
//           setArticlesList(response.data.allArticles || []);
//         }
//       } catch (err) {
//         console.error("Fetch Error:", err);
//         setError("Unable to connect to the server at the moment.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     document.title = "Articles";
//     window.scrollTo(0, 0); 
//     fetchArticles();
//   }, []);

//   // حالة التحميل
//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center text-[#683A2F] font-bold text-2xl">Loading Articles...</div>;
//   }

//   return (
//     <div className="bg-[#F7FEF4] pt-10 md:pt-16 pb-20 px-5 md:px-10">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* 1. قسم المقال المميز (Featured Today) */}
//         {featured ? (
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-[22px] md:text-[28px] font-bold text-[#683A2F] uppercase tracking-widest mb-1">
//               Reader's Choice
//             </h2>
//             <p className="text-[16px] md:text-[18px] text-[#4B4B4B] mb-10">
//               This month's most popular article is: <span className="font-semibold text-[#683A2F]">"{featured.title}"</span>
//             </p>

//             <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[40px] overflow-hidden shadow-xl mb-20 border border-[#683a2f1a]">
//               <div className="py-4 text-center font-bold text-[#683A2F] uppercase tracking-widest text-xl bg-white/30">
//                 Featured Today
//               </div>
//               <img 
//                 src={featured.imageUrl || articleImg} 
//                 alt="Featured" 
//                 className="w-full h-[350px] object-cover" 
//               />
//               <div className="p-8">
//                 <p className="text-[#4B4B4B] mb-8 text-lg leading-relaxed">
//                   {featured.description}
//                 </p>
//                 <a 
//                   href={featured.url || "#"} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-[#683A2F] text-white py-3 px-12 rounded-2xl font-bold transition-all hover:bg-[#522e25] inline-block no-underline"
//                 >
//                   Read more
//                 </a>
//               </div>
//             </div>
//           </div>
//         ) : (
//           !error && <p className="text-center text-gray-500 mb-10">No featured article today.</p>
//         )}

//         <h2 className="text-center text-[48px] font-black text-[#683A2F] mb-16 uppercase">Articles</h2>

//         {/* 2. شبكة المقالات (Grid) - حل مشكلة الـ map إيرور */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {articlesList && articlesList.length > 0 ? (
//             articlesList.map((art) => (
//               <ArticleCard 
//                 key={art.id} 
//                 title={art.title} 
//                 description={art.description} 
//                 imageUrl={art.imageUrl || articleImg} 
//                 link={art.url || "#"} 
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-10">
//               {error ? (
//                 <p className="text-red-500 font-bold">{error}</p>
//               ) : (
//                 <p className="text-gray-500 italic text-xl">No articles available.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ArticlePage;





import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import articleImg from '../assets/Article Image.png'; 
import { API_ENDPOINTS } from '../api/endpoints';

function ArticlePage() {
  const [featured, setFeatured] = useState(null); 
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(''); 
        
        const response = await axios.get(API_ENDPOINTS.GET_ARTICLES, {
          headers: { "ngrok-skip-browser-warning": "69420" }
        });

        if (response.data) {
          setFeatured(response.data.featuredArticle || null);
          setArticlesList(response.data.allArticles || []);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Unable to connect to the server at the moment.");
      } finally {
        setLoading(false);
      }
    };

    document.title = "Articles";
    window.scrollTo(0, 0); 
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FEF4]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#683A2F] mb-4"></div>
        <p className="text-[#683A2F] font-bold text-2xl">Loading Articles...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7FEF4] pt-10 md:pt-16 pb-20 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Featured Article */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#683A2F] uppercase tracking-widest mb-1">
            Reader's Choice
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4B4B4B] mb-10">
            {error ? "Service Temporarily Unavailable" : `This month's most popular article is: "${featured?.title || '...'}"`}
          </p>

            {/* لو فيه إيرور هيظهر مستطيل منقط للمقال المميز  */}
          {!error && featured ? (
            <div className="w-full max-w-[1000px] bg-[rgba(141,73,58,0.25)] rounded-[40px] overflow-hidden shadow-xl mb-20 border border-[#683a2f1a]">
              <div className="py-4 text-center font-bold text-[#683A2F] uppercase tracking-widest text-xl bg-white/30">
                Featured Today
              </div>
              <img 
                src={featured.imageUrl || articleImg} 
                alt="Featured" 
                className="w-full h-[350px] object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#683A2F] mb-4">{featured.title}</h3>
                <p className="text-[#4B4B4B] mb-8 text-lg leading-relaxed">{featured.description}</p>
                <a 
                  href={featured.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#683A2F] text-white py-3 px-12 rounded-2xl font-bold transition-all hover:bg-[#522e25] inline-block no-underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ) : (
            /* Featured Article ERROR */
            <div className="w-full max-w-[1000px] py-16 mb-20 bg-white/20 rounded-[40px] border-2 border-dashed border-[#683a2f33] flex flex-col items-center">
              <h3 className="text-[#683A2F] font-bold text-2xl mb-2">Featured Article Unavailable</h3>
              <p className="text-[#4B4B4B] max-w-md px-5">
                {error || "We're currently selecting today's top article. Please check back later!"}
              </p>
            </div>
          )}
        </div>

        <h2 className="text-center text-[48px] font-black text-[#683A2F] mb-16 uppercase italic">Articles</h2>

\        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {!error && articlesList && articlesList.length > 0 ? (
            articlesList.map((art) => (
              <ArticleCard 
                key={art.id} 
                title={art.title} 
                description={art.description} 
                imageUrl={art.imageUrl || articleImg} 
                link={art.url || "#"} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/20 rounded-3xl border-2 border-dashed border-[#683a2f33]"> 
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-[#683A2F] font-bold text-2xl mb-2">
                {error ? "Oops! Something went wrong" : "No articles found"}
              </h3>
              <p className="text-[#4B4B4B] max-w-md mx-auto">
                {error || "We don't have any articles to show right now. Please check back later!"}
              </p>
              {error && (
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-6 text-[#683A2F] underline font-bold hover:text-[#522e25]"
                >
                  Try refreshing the page
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;