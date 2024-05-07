import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white text-gray-800 p-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-bold text-2xl md:text-2xl">Sporti<span className="text-green-500">fy.</span></span>
      </div>

      {/* Menu Icon (visible on small screens) */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5A.75.75 0 012.75 14h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 14.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Links (visible on small screens when menu is open, and on medium screens and above) */}
      <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#" className="block md:inline-block mt-2 md:mt-0 text-gray-600 hover:text-green-500">Pour les entreprises</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="block md:inline-block mt-2 md:mt-0 text-gray-600 hover:text-green-500">Pour les particuliers</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="block md:inline-block mt-2 md:mt-0 text-green-500 hover:text-green-700" style={{color:"#04cfb4"}}>Connexion</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="block md:inline-block mt-2 md:mt-0 text-white font-bold py-2 px-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full" style={{background:"#04cfb4"}} >Inscription</a>
      </div>
    </nav>
  );
};

export default Navbar;
