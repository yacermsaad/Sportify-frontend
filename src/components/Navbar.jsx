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
  });

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
      <div className="block md:flex items-center space-x-5 mx-auto">
        <Link to="/" className="text-green-500 hover:text-[#04cfb4] cursor-pointer font-medium text-md text-center transition-colors" style={{color:"black"}}>{t('Home')}</Link>
        <Link to="/services" className="text-green-500 hover:text-[#04cfb4] cursor-pointer font-medium text-md text-center transition-colors" style={{color:"black"}}>{t('Services')}</Link>
        <Link to="/blogs" className="text-green-500 hover:text-[#04cfb4] cursor-pointer font-medium text-md text-center transition-colors" style={{color:"black"}}>{t('Blogs')}</Link>
        <Link to="/contact" className="text-green-500 hover:text-[#04cfb4] cursor-pointer font-medium text-md text-center transition-colors" style={{color:"black"}}>{t('Contact')}</Link>
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
            <span className="text-gray-400 max-md:hidden">|</span>
            <a className="block md:inline-block mt-2 md:mt-0 text-green-500 hover:text-green-700 cursor-pointer text-bold text-md text-center" style={{ color: "#04cfb4" }} onClick={openModalLogin}>{t('cnx')}</a>
            <Login isOpen={isModalOpenLogin} setOpen={closeModal} />
            <span className="text-gray-400 max-md:hidden">|</span>
            <a className="block md:inline-block mt-2 md:mt-0 text-white font-bold py-2 px-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full text-bold text-md cursor-pointer" style={{ background: "#04cfb4" }} onClick={openModalCreate}>{t('insc')}</a>
            <Login isOpen={isModalOpenCreate} setOpen={closeModal} />
          
          </>
        )}
        {userInitial && (

          <div className="flex items-center space-x-4">
           
            <input type="checkbox" id="dropdownToggle" class="hidden peer" />
           
            <div class="relative inline-block text-left  rounded-lg  pl-6  py-1 shadow-sm ">
              <input type="checkbox" id="dropdownAvatarNameToggle" class="hidden peer" />
              <label for="dropdownAvatarNameToggle" class="flex items-center text-sm pe-1  text-black font-semibold rounded-full cursor-pointer hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 ">
                
                <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
                  style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   id="dropdownToggle">
                  {userInitial}
                </div>
                <span className='pl-2'>{JSON.parse(localStorage.getItem('user')).name}</span>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </label>

            <div id="dropdownAvatarName" className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-300 rounded-lg shadow w-44 peer-checked:block mt-2">
              <div className="px-4 py-3 text-sm text-gray-900 ">
                <div className="truncate">{JSON.parse(localStorage.getItem('user')).email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-900 ">
                <li>
                  <a href="/becom_coache" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-500 dark:hover:text-white">Become a coach</a>
                </li>
                <li>
                  <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-500 dark:hover:text-white">Settings</a>
                </li>
               
              </ul>
              <div className="py-2 cursor-pointer" onClick={handleLogout}>
                <a  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-green-500 dark:text-gray-900 dark:hover:text-white">Sign out</a>
              </div>
            </div>
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
