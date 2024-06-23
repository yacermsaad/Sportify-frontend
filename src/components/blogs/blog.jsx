import React, { useState, useEffect } from 'react';
import Login from '../login/Login';
import Likes_popup from './likes_popus';
import axios from 'axios';
import { use } from 'i18next';

function Blog(props) {
  const [isModalOpenLike, setisModalOpenLike] = useState(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [respons, setrespons] = useState(false);



  const addlike=(article_id,user_id)=>{
    axios.post('http://localhost:8000/api/addlike',{article_id:article_id,user_id:user_id})
    .then(response => {
      setrespons(true);
      props.getdata();

    })
    .catch(error => {
        console.error('There was an error', error);
    });
  }
  const openModalLogin = () => {
    setisModalOpenLike(true);
  };

  const closeModal = () => {
    setisModalOpenLike(false);
    setIsModalOpenLogin(false);

  };



  return (<div className='bg-white  rounded-md mt-10' key={props.blog.id}> 
            <div className='pl-10 py-5' >
              <div className='flex '>
              {props.blog.coach.image=='null'?<div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
                  style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   id="dropdownToggle">
                  {userInitial}
                </div> :
                <div className="flex items-center justify-center w-8 h-8  text-white rounded-full mr-4">
                <img src={`http://localhost:8000/storage/${props.blog.coach.image}`} />
                </div>
                }
                <div >
                   <div className='font-semibold capitalize flex flex-col'>{props.blog.coach.fullname}</div>
                    <div className='text-slate-400 text-[11px]'>20 h</div>
                </div>
              </div>
              <div className='pt-3'>{props.blog.contenu}</div>
            </div>
            {props.blog.images.map((im,i)=>{
              return <img src={`http://localhost:8000/storage/${im.img}`} className=" w-full" alt="chair"  key={i}/>
              })
            }
             <div className='flex border-b-2 px-2 justify-between text-slate-600'>
              <div  className='hover:text-blue-500  hover:underline cursor-pointer' onClick={openModalLogin}> {props.blog.likes.length>0?props.blog.likes.length+" Likes":null} </div>
              <div>{props.blog.likes.length>0?props.blog.comments.length+" Coments":null}</div>
             </div>

             <div className='flex justify-around border-b-2 py-2'>
        
                  <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1' onClick={()=>{if((localStorage.getItem('user'))!=null){addlike(props.blog.id,JSON.parse(localStorage.getItem('user')).id)}else{setIsModalOpenLogin(true);}}}> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>

          
              <div className='flex hover:bg-slate-100 cursor-pointer w-[260px] justify-center py-1'> <img src="./img/coment.png"className="w-5 h-5 mr-2 mt-0.5" alt="prb" /> <span className=''>Coment</span></div>

             </div>
             <Login isOpen={isModalOpenLogin} setOpen={closeModal} blog="true"/>
             <Likes_popup isOpen={isModalOpenLike} setOpen={closeModal}  likes={props.blog.likes}/>

    
  </div>
   
  );
}

export default Blog;
