import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';
import Blog from './blog';

function Blogs() {
  const [user_profile, setuser_profile] = useState(null);
  const [user, setuser] = useState(null);

  useEffect(() => {
     
    setuser(JSON.parse(localStorage.getItem('user')));
    if (user) {
      const name = user.name;
      setuser_profile(name.slice(0, 2).toUpperCase());
    }
  });
  return (<div className='bg-slate-50 min-h-[100vh] '>
            <Navbar />
            {user!=null?
            <div className='md:w-[600px] mx-auto  bg-white mt-5  rounded-md '>
              <label  class=" flex items-center text-sm pe-1  text-black font-semibold rounded-full cursor-pointe md:me-0 focus:ring-4 focus:ring-gray-100  px-10 py-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   id="dropdownToggle">
                  {user_profile}
                  </div>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl  block w-full p-2.5 dark:bg-gray-100  dark:placeholder-gray-400 cursor-pointer outline-none " placeholder="Do you want to create block ?" readOnly/>
                </label>
            </div>
             :null} 
            <div className='md:w-[600px] mx-auto '>
                <Blog user_profile={user_profile}/>
                <Blog/>
            </div>

  </div>
  );
}

export default Blogs;
