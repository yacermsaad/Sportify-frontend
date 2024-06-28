import React, { useEffect, useState } from 'react';
import Likes_popup from './likes_popus';
import axios from 'axios';
import { use } from 'i18next';
import Login from '../login/Login';
import { formatDistanceToNow } from 'date-fns';

function Blog(props) {

  const [isModalOpenLike, setisModalOpenLike] = useState(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [respons, setrespons] = useState(false);
  const [Like, setLike] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const deletecoment=(id)=>{
      console.log(id)
    axios.delete(`http://localhost:8000/api/deletcoment/${id}`)
    .then(response => {
      props.getdata();
    })
    .catch(error => {
        console.error('There was an error', error);
    });
  
};

  const addlike=(article_id,user_id)=>{
    setLike(false)
    props.blog.likes.map((l,i)=>{
      if(l.user.id==JSON.parse(localStorage.getItem('user')).id){
        setLike(true)
      }else{
        setLike(false)
      }
    });
  
    props.getdata();
    axios.post('http://localhost:8000/api/addlike',{article_id:article_id,user_id:user_id})
    .then(response => {
      setrespons(true);
      props.getdata();

    })
    .catch(error => {
        console.error('There was an error', error);
    });
  }

  const closeModal = () => {
    setisModalOpenLike(false);
    setIsModalOpenLogin(false);

  };

  const handleCreateFormToggle = () => {
    setShowCreateForm(!showCreateForm);
  
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titre', title);
    formData.append('contenu', content);
    
    try {
      const response = await axios.post('http://your-api-endpoint/blog_create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog post created:', response.data);
      alert('Blog post created successfully!');
      setTitle('');
      setContent('');
      setShowCreateForm(false);
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Failed to create blog post.');
    } 
}


useEffect(()=>{
  setLike(false)
  if(props.blog && JSON.parse(localStorage.getItem('user'))!=undefined){
    props.blog.likes.map((l,i)=>{
      if(l.user.id==JSON.parse(localStorage.getItem('user')).id){
        setLike(true)
      }else{
        setLike(false)
      }
    });}
})

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month since getMonth() returns 0-11
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const calculateTimeAgo = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
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
                   <div className='text-slate-400 text-[11px]'>{calculateTimeAgo(props.blog.created_at)}</div>
                 </div>
              </div>
              <div className='pt-3'>{props.blog.contenu}</div>
            </div>
            {props.blog.images.map((im,i)=>{
              return <img src={`http://localhost:8000/storage/${im.img}`} className=" w-full" alt="chair"  key={i}/>
              })
            }
             <div className='flex border-b-2 px-2 justify-between text-slate-600'>
              <div  className='hover:text-blue-500  hover:underline cursor-pointer' onClick={()=>{setisModalOpenLike(true);}}> {props.blog.likes.length>0?props.blog.likes.length+" Likes":null} </div>
              <div onClick={()=>{if((localStorage.getItem('user'))!=null){handleCreateFormToggle()}else{setIsModalOpenLogin(true);}}}>{props.blog.likes.length>0?props.blog.comments.length+" Coments":null}</div>
             </div>

             <div className='flex justify-around border-b-2 py-2'>
              <div className={`flex  ${Like?'bg-blue-400':'hover:bg-slate-100'} cursor-pointer w-[260px] justify-center py-1`} onClick={()=>{if((localStorage.getItem('user'))!=null){addlike(props.blog.id,JSON.parse(localStorage.getItem('user')).id)}else{setIsModalOpenLogin(true);}}}> <img src="./img/like.png"className="w-5 h-5 mr-2" alt="prb" /> <span className=''>Like</span></div>
              <div className={`flex hover:bg-slate-100  cursor-pointer w-[260px] justify-center py-1`}  onClick={()=>{if((localStorage.getItem('user'))!=null){handleCreateFormToggle()}else{setIsModalOpenLogin(true);}}}> <img src="./img/coment.png"className="w-5 h-5 mr-2 mt-0.5" alt="prb" /> <span className=''>Coment</span></div>
            
            
          </div>
          {showCreateForm && (  <div style={{ marginTop: '0px' }}>
            {props.blog.comments.map((cm,i)=>{
            return <div key={i}>
                     <div className='flex justify-center relative top-1/3'>
            <div className='relative grid grid-cols-1 gap-4 p-4  border-b rounded-lg bg-white' style={{ width: '100%', borderLeft: 'none', borderRight: 'none' }}>
              <div className='relative flex gap-4 items-center'>

              {cm.user.image==null?<div className="flex items-center justify-center w-10 h-9 bg-green-500 text-white rounded-full "
                  style={{background:"lightgreen", color:"white",fontWeight:"bold"} }   id="dropdownToggle">
                  {cm.user.name.slice(0, 2).toUpperCase()}
                </div> :
               
                <div className='flex items-center justify-center w-10 h-10 rounded-full overflow-hidden'>
                  <img
                  src={`http://localhost:8000/storage/${cm.user.image}`}
                  className='w-full h-full object-cover rounded-full'
                  alt=''
                  loading='lazy'
                />
              </div> 
                }
                
                <div className='flex flex-col w-full'>
                  <div className='flex flex-row justify-between'>
                    <p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>{cm.user.name}</p>
                    {cm.user.id==JSON.parse(localStorage.getItem('user')).id?
                    <a className='text-red-500 text-xl cursor-pointer' onClick={()=>{deletecoment(cm.id)}}>

                      <i className='fa-solid fa-trash'></i>
                    </a>:null}
                  </div>
                  <p className='text-gray-400 text-sm'>20 April 2022, at 14:88 PM</p>
                </div>
              </div>
              <div className='text-wrap hover:text-balance flex flex-wrap' style={{overflowWrap: 'anywhere'}}>
                   {cm.contenu}
              </div>
            </div>
          </div>
    
              </div>
            
            })}
 
            </div>
          )} 
      <Login isOpen={isModalOpenLogin} setOpen={closeModal} blog="true"/>
      <Likes_popup isOpen={isModalOpenLike} setOpen={closeModal}  likes={props.blog.likes}/>
  </div>
  )}



export default Blog;
