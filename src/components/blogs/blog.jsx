import React, { useState, useEffect } from 'react';
import Login from '../login/Login';
import Likes_popup from './likes_popus';

function Blog(props) {
  const [isModalOpenLogin, setisModalOpenLogin] = useState(false);

  const openModalLogin = () => {
    setisModalOpenLogin(true);
   
  };
  const closeModal = () => {
    setisModalOpenLogin(false);
  };
  return (<div className='bg-white  rounded-md mt-10'> 
            <div className='pl-10 py-5' >
              <div className='flex '>
                <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-2"
                          style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   >
                        {props.user_profile}
                </div>
                <div >
                   <div className='font-semibold capitalize flex flex-col'>{JSON.parse(localStorage.getItem('user')).name}</div>
                    <div className='text-slate-400 text-[11px]'>20 h</div>
                </div>
              </div>
              <div className='pt-3'>hhhhhhhh</div>
            </div>

             <img src="C:\fakepath\Capture d'écran 2024-06-15 002328.png" 
             className=" w-full" alt="chair" />
             <div className='flex border-b-2 px-2 justify-between text-slate-600'>
              <div  className='hover:text-blue-500  hover:underline cursor-pointer' onClick={openModalLogin}>80 likes</div>
              <div>18 coments</div>
             </div>

             <div className='flex justify-around border-b-2 py-2'>
              
              <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1'> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>
          
              <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1'> <img src="./img/coment.png"className="w-5 h-5 mr-2 mt-0.5" alt="prb" /> <span className=''>Coment</span></div>

             </div>
             <Likes_popup isOpen={isModalOpenLogin} setOpen={closeModal} />

    
  </div>
   
  );
}

export default Blog;
