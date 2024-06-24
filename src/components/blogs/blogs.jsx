import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';
import Blog from './blog';
import axios from 'axios';
import PlaceholderCard from '../PlaceholderCard';

function Blogs() {
  const [user_profile, U_profile] = useState(null);
  const [data, setdata] = useState([]);
  const coach=localStorage.getItem('coache');
  const [userProfile, setUserProfile] = useState(null);
  
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [images, setImages] = useState([]);
  const [picture,setpicture]=useState("")
  const [isCreatingBlog, setIsCreatingBlog] = useState(false);
  const coache = JSON.parse(localStorage.getItem('coache'));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      const name = storedUser.name;
      setUserProfile(name.slice(0, 2).toUpperCase());
    }
  }, []);


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
    setUser(JSON.parse(localStorage.getItem('user')));
    getdata()
  },[])
  const handleInputClick = () => {
    setIsCreatingBlog(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsCreatingBlog(false);
    resetForm();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titre', title);
    formData.append('contenu', content);
    formData.append('coache_id', user.id);
    formData.append('picture', picture);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/blogarticles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
<<<<<<< HEAD
      });
      console.log('Response:', response.data); 
      alert('Blog post added successfully!');
      handleClosePopup();
    
      resetForm();
=======
      }).then(response => {
        console.log('Response:', response.data); // Log response data for debugging      
        handleClosePopup();
        resetForm();
        getdata;
    })
      
>>>>>>> 1500914d0deeb08374f2c923a5c7cce23a92cbeb
    } catch (error) {
      console.error('Error adding blog post:', error);
      if (error.response) {
        console.error('Response data:', error.response.data); 
      }
     
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage([]);
  };

  return (<div className='bg-slate-50 min-h-[100vh] '>
            <Navbar getdata={getdata}/>
           
            {user!=null && coach==1?
            <div className='md:w-[600px] mx-auto  bg-white mt-5  rounded-md '>
              <label  className=" flex items-center text-sm pe-1  text-black font-semibold rounded-full cursor-pointe md:me-0 focus:ring-4 focus:ring-gray-100  px-10 py-2"
              onClick={handleInputClick}>
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
                    style={{background:"lightgreen", color:"white", marginLeft:"-20px",fontWeight:"bold"} }   id="dropdownToggle">
                  {user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl  block w-full p-2.5 dark:bg-gray-100  dark:placeholder-gray-400 cursor-pointer outline-none " placeholder="Do you want to create block ?" readOnly/>
                </label>
            </div>
             :null} 
            <div className='md:w-[600px] mx-auto '>
              {data.length>0?data.map((blg,i)=>{
                     return <Blog blog={blg} key={i} getdata={getdata}/>
                  }):<PlaceholderCard/>}

{showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {isCreatingBlog && (
              <div>
                <h2 className="text-lg font-bold mb-4">Create a Blog Post</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-gray-700">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                      placeholder="Title"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-gray-700">Content</label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      className="border border-gray-300 rounded px-3 py-2 h-32"
                      placeholder="Content"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-gray-700">Images</label>
                    <input
                      type="file"
                      multiple
                      onChange={(e)=>{ setpicture(e.target.files[0]);}}
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-400 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Add Blog Post
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
</div> </div>)}

export default Blogs;
