// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
<<<<<<< HEAD
import ProfilePage from './components/pro';
=======
import Detail_service from './components/Deatil_service'
>>>>>>> 8d6e4befb7d3dcf697f2559ff10a1822b804fb03
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <PlaceholderCard />; 
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
<<<<<<< HEAD
          <Route path="/pro" element={<ProfilePage />} />
=======
          <Route path="/serv" element={<Detail_service />} />
>>>>>>> 8d6e4befb7d3dcf697f2559ff10a1822b804fb03

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
