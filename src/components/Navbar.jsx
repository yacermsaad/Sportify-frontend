import React, { useState, useEffect } from 'react';
import Login from './login/Login.jsx';
import { useDispatch } from 'react-redux';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
  const [userInitial, setUserInitial] = useState(null);
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const name = user.name;
      setUserInitial(name.slice(0, 2).toUpperCase());
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpenLogin(false);
    setIsModalOpenCreate(false);
  };

  const openModalLogin = () => {
    setIsModalOpenLogin(true);
    dispatch({ type: 'create', log: false });
    setIsModalOpenCreate(false);
  };

  const openModalCreate = () => {
    setIsModalOpenCreate(true);
    dispatch({ type: 'create', log: true });
    setIsModalOpenLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserInitial(null);
  };

  return (
    <nav className={`flex items-center justify-between md:px-24 ${i18n.language == 'ar' ? 'flex-row-reverse' : ''} bg-white text-gray-800 p-4 shadow-lg`}>
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-bold text-2xl md:text-2xl">Sporti<span className="text-green-500">fy.</span></span>
      </div>

      {/* Links */}
      <div className="md:flex items-center space-x-4">
        <Link to="/" className="text-green-500 hover:text-[#04cfb4] cursor-pointer text-bold text-md text-center transition-colors" style={{color:"black"}}>{t('Home')}</Link>
        <Link to="/services" className="text-green-500 hover:text-[#04cfb4] cursor-pointer text-bold text-md text-center transition-colors" style={{color:"black"}}>{t('Services')}</Link>
        <Link to="/blogs" className="text-green-500 hover:text-[#04cfb4] cursor-pointer text-bold text-md text-center transition-colors" style={{color:"black"}}>{t('Blogs')}</Link>
        <Link to="/contact" className="text-green-500 hover:text-[#04cfb4] cursor-pointer text-bold text-md text-center transition-colors" style={{color:"black"}}>{t('Contact')}</Link>
      </div>

      {/* User Authentication Section */}
      <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <form className="block md:inline-block mt-2 md:mt-0">
          <select id="countries" className="border-2 border-[#04cfb4] text-[0.9rem] rounded-md w-full p-1 bg-white text-[#04cfb4] font-bold outline-none"
            onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
            <option value="fr" className="font-bold hover:shadow-custom-inset" selected>FR</option>
            <option value="ar" className='font-bold'>AR</option>
            <option value="en" className='font-bold'>EN</option>
          </select>
        </form> &nbsp; &nbsp;&nbsp;&nbsp;

        {!userInitial && (
          <>
            <a className="block md:inline-block mt-2 md:mt-0 text-green-500 hover:text-green-700 cursor-pointer text-bold text-md text-center" style={{ color: "#04cfb4" }} onClick={openModalLogin}>{t('cnx')}</a>
            <Login isOpen={isModalOpenLogin} setOpen={closeModal} />
            <span className="text-gray-400 max-md:hidden">|</span>
            <a className="block md:inline-block mt-2 md:mt-0 text-white font-bold py-2 px-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full text-bold text-md cursor-pointer" style={{ background: "#04cfb4" }} onClick={openModalCreate}>{t('insc')}</a>
            <Login isOpen={isModalOpenCreate} setOpen={closeModal} />
            <span className="text-gray-400 max-md:hidden">|</span>
          </>
        )}
        {userInitial && (

          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="text-white  py-2 px-4 bg-red-500 hover:bg-red-700 rounded-full"
              style={{background:"transparent",border:"1px solid black", color:"black"}}
            >
              Logout
            </button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full"
            style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"}} 
            
            >
              {userInitial}
            </div>
          
          </div>
        )}
      </div>

      {/* Menu Icon (visible on small screens) */}
      <div className="block md:hidden ">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5A.75.75 0 012.75 14h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 14.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
