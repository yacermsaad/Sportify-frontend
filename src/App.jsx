// App.js
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Page_dv_coache from './components/page_dv_coach/page_dv_coach';
import Contact from './components/Contact';
import Dashbord from './components/Dashbord';
import Profile from './components/Profile';
import BlogSection from './components/BlogSection';
import NotFoundPage from './components/NotFoundPage'; 
import ResetPasswordForm from './components/ResetPasswordForm';
import PlaceholderCard from './components/PlaceholderCard';
import Blogs from './components/blogs/blogs';
import BlogForm from './components/blogs/BlogForm';
import Test from './test';
import BlogList from './components/blogs/BlogList';
import ProfilePage from './components/pro';
import Detail_service from './components/Deatil_service';
import CheckoutForm from './components/CheckoutForm';
import AddServiceForm from './components/AddServiceForm';
import Message from './components/Message';
import ConsultationAi from './components/ConsultationAi';
import Checkout from './components/Checkout';
import Verification from './components/login/verification';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  const userLoggedIn = !!localStorage.getItem('user');

  if (loading) {
    return (
      <div>
      <PlaceholderCard  />
    
      </div>
    ); 
  }

  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/becom_coache" element={<Page_dv_coache />} />
          <Route path="/dash" element={<Dashbord />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/blogs" element={<BlogSection />} /> */}
          <Route path="/reset" element={<ResetPasswordForm />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogForm" element={<BlogForm />} />
          <Route path="/BlogList" element={<BlogList />} />
          <Route path="/service/slug/:id" element={<Detail_service />} />
          <Route path="/pro" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/addserv" element={<AddServiceForm />} />
          <Route path="/messagerie" element={<Message />} />
          {userLoggedIn ? (
            <Route path="/consultation" element={<ConsultationAi />} />
          ) : (
            <Route path="/consultation" element={<Navigate to="/" state={{ from: '/consultation' }} />} />
          )}
          <Route path="/fff" element={<Checkout />} />
          <Route path="/verification" element={<Verification />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
