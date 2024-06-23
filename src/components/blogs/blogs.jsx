import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';
import Blog from './blog';
import axios from 'axios';
import PlaceholderCard from '../PlaceholderCard';

function Blogs() {
  const [user_profile, setuser_profile] = useState(null);
  const [user, setuser] = useState(null);
  const [data, setdata] = useState([]);
  const coach=localStorage.getItem('coache');

  // useEffect(() => {
  
  
  // });
  //   if (user) {
  //     const name = user.name;
  //     setuser_profile(name.slice(0, 2).toUpperCase());
  //   }

  const getdata=()=>{
    axios.get('http://localhost:8000/api/blogs')
    .then(response => {
        setdata(response.data.blogs)
    })
    .catch(error => {
        console.error('There was an error uploading the image!', error);
        
    });
  }
  useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));
    getdata()
   

  },[])
  return (<div className='bg-slate-50 min-h-[100vh] '>
            <Navbar getdata={getdata}/>
           
            {user!=null && coach==1?
            <div className='md:w-[600px] mx-auto  bg-white mt-5  rounded-md '>
              <label  class=" flex items-center text-sm pe-1  text-black font-semibold rounded-full cursor-pointe md:me-0 focus:ring-4 focus:ring-gray-100  px-10 py-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   id="dropdownToggle">
                  {user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl  block w-full p-2.5 dark:bg-gray-100  dark:placeholder-gray-400 cursor-pointer outline-none " placeholder="Do you want to create block ?" readOnly/>
                </label>
            </div>
             :null} 
            <div className='md:w-[600px] mx-auto '>
              {data.length>0?data.map((blg,i)=>{
                     return <Blog blog={blg} key={i} getdata={getdata}/>
                  }):<PlaceholderCard/>}
               
                
             
            </div>

  </div>
  );
}

export default Blogs;
