import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          Welcome to <span className="text-green-600">Sportify</span> - Your Ultimate
          <span className="text-green-600"> Sports Coaching</span> Platform
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          Discover top-notch coaching services tailored to your needs. Coaches post their services, and users can easily browse and order the perfect training sessions.
        </p>
      </div>
      <div className="flex justify-center items-center">
       
        <Link to="/services"> <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 bg-transparent transition duration-150 ease-in-out hover:border-green-500 lg:text-xl lg:font-bold hover:text-green-500 rounded border border-green-600 text-green-600 px-4 sm:px-10 py-2 sm:py-4 text-sm">
         Learn more about services
        </button></Link>
      </div>
    </div>
  </div>
);

export default Header;
