import React, { useState } from 'react';
import Login from './login/Login.jsx';
import { useSelector, useDispatch } from 'react-redux';
import 'animate.css';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpenlogin, setIsModalOpenlogin] = useState(false);
  const [isModalOpencreate, setIsModalOpencreate] = useState(false);
  const [t,i18n]=useTranslation();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeModal = () => {
    setIsModalOpenlogin(false);
    setIsModalOpencreate(false)
   
  };
  const openModalLogin = () => {
    setIsModalOpenlogin(true);
    dispatch({type:'create',log:false});
    setIsModalOpencreate(false)
    
  };
  const openModalCreate = () => {
    setIsModalOpencreate(true);
    dispatch({type:'create',log:true});
    setIsModalOpenlogin(false);
    
    
  };

  return (
    <nav const className = {`flex items-center justify-between md:px-24 ${i18n.language == 'ar' ? 'flex-row-reverse' : ''} bg-white text-gray-800 p-4 shadow-lg`}>

      {/* Logo */}
      <div className="flex items-center">
        <span className="font-bold text-2xl md:text-2xl">Sporti<span className="text-green-500">fy.</span></span>
      </div>

      {/* Menu Icon (visible on small screens) */}
      <div className="block md:hidden ">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5A.75.75 0 012.75 14h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 14.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Links (visible on small screens when menu is open, and on medium screens and above) */}
      <div className={`md:flex items-center space-x-4  ${isMenuOpen ? 'block' : 'hidden'} md:block `}   >
        {/* <a href="#" className="block md:inline-block mt-2 md:mt-0 text-gray-600 hover:text-green-500">Pour les entreprises</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="block md:inline-block mt-2 md:mt-0 text-gray-600 hover:text-green-500">Pour les particuliers</a>
        <span className="text-gray-400">|</span> */}
        <a  className="block md:inline-block mt-2 md:mt-0 text-green-500 hover:text-green-700 cursor-pointer text-bold text-md text-center" style={{color:"#04cfb4"}} onClick={openModalLogin}>{t('cnx')}</a>
        <Login isOpen={isModalOpenlogin} setOpen={closeModal} />
        <span className="text-gray-400 max-md:hidden">|</span>
        <a className="block md:inline-block mt-2 md:mt-0 text-white font-bold py-2 px-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full text-bold text-md cursor-pointer" style={{background:"#04cfb4"}} onClick={openModalCreate}>{t('insc')}</a>
        <Login isOpen={isModalOpencreate} setOpen={closeModal} />
        <span className="text-gray-400 max-md:hidden">|</span>
      <form class="block md:inline-block mt-2 md:mt-0">
        <select id="countries" class=" border-2 border-[#04cfb4] text-[0.9rem] rounded-md w-full p-1  bg-white text-[#04cfb4] font-bold  outline-none "
         onChange={(e)=>{i18n.changeLanguage(e.target.value)}}>
        <option value="fr" className="font-bold hover:shadow-custom-inset" selected>FR</option>
          <option value="ar" className='font-bold '>AR</option>
        
          <option value="en" className='font-bold '>EN</option>
          
        </select>
      </form>

        

      </div>
      
    </nav>
  );
};

export default Navbar;
