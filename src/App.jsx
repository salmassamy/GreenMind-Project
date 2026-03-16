// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Navbar';
// import Footer from './components/Footer';
// import SelectionEntry from './pages/SelectionEntry';
// import ArticlePage from './pages/ArticlePage';
// import SignUp from './pages/SignUp'; 
// import Login from './pages/Login'; 
// import HomeDashboard from './pages/HomeDashboard'; 
// import ProductDashboard from './pages/ProductDashboard'; 
// import UserActivity from './pages/UserActivity'; 
// import Orders from './pages/Orders'; 
// import Profile from './pages/Profile'; 

// import ForgotPassword from './pages/ForgotPassword'; 

// function AppContent() {
//   const location = useLocation();
  
//   const noHeaderFooterPages = [
//     '/login', 
//     '/signup', 
//     '/selection', 
//     '/home-dashboard', 
//     '/product-dashboard',
//     '/user-activity',
//     '/orders',
//     '/profile',
//     '/forgot-password' 
//   ];

//   const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

//   return (
//     <div className="min-h-screen flex flex-col font-inter">
//       {!hideHeaderFooter && <Header />}
      
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<ArticlePage />} /> 
//           <Route path="/articles" element={<ArticlePage />} />
          
//           <Route path="/selection" element={<SelectionEntry />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />

//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           <Route path="/home-dashboard" element={<HomeDashboard />} />
//           <Route path="/product-dashboard" element={<ProductDashboard />} />
//           <Route path="/user-activity" element={<UserActivity />} />
//           <Route path="/orders" element={<Orders />} />

//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </main>

//       {!hideHeaderFooter && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar'; // ضفنا ده
import SelectionEntry from './pages/SelectionEntry';
import ArticlePage from './pages/ArticlePage';
import SignUp from './pages/SignUp'; 
import Login from './pages/Login'; 
import HomeDashboard from './pages/HomeDashboard'; 
import ProductDashboard from './pages/ProductDashboard'; 
import UserActivity from './pages/UserActivity'; 
import Orders from './pages/Orders'; 
import Profile from './pages/Profile'; 
import ForgotPassword from './pages/ForgotPassword'; 

function AppContent() {
  const location = useLocation();
  
  // الصفحات اللي مش عايزين فيها لا هيدر ولا فوتر (زي لوحة التحكم أو اللوجن)
  const noHeaderFooterPages = [
    '/login', 
    '/signup', 
    '/selection', 
    '/home-dashboard', 
    '/product-dashboard',
    '/user-activity',
    '/orders',
    '/forgot-password' 
  ];

  const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* الهيدر يظهر لو الصفحة مش في القائمة */}
      {!hideHeaderFooter && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ArticlePage />} /> 
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/selection" element={<SelectionEntry />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-dashboard" element={<HomeDashboard />} />
          <Route path="/product-dashboard" element={<ProductDashboard />} />
          <Route path="/user-activity" element={<UserActivity />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {/* الفوتر والبار السفلي يظهروا لو الصفحة مش في القائمة */}
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <BottomBar />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;