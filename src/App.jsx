import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Page_dv_coache from './components/page_dv_coach/page_dv_coach';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/becom_coache" element={<Page_dv_coache/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
