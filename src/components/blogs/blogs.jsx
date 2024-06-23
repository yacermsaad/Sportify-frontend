import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Keep imports as they are
import Navbar from '../Navbar';
import Blog from './blog';

const Blogs = () => {
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
    console.log(e.target.files[0]);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titre', title);
    formData.append('contenu', content);
    formData.append('coache_id', user.id);
    formData.append('picture', picture);

    // images.forEach((image) => {
    //   formData.append('images[]', image);
    // });

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/blogarticles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data); // Log response data for debugging
      alert('Blog post added successfully!');
      handleClosePopup();
      // Optionally, you can reset form fields or state here
      resetForm();
    } catch (error) {
      console.error('Error adding blog post:', error);
      if (error.response) {
        console.error('Response data:', error.response.data); // Log specific error response data
      }
      alert('Failed to add blog post.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage([]);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      {user && coache === 1 && (
        <div className="md:w-[600px] mx-auto bg-white mt-5 rounded-md p-4">
          <label
            className="flex items-center text-sm p-2 text-black font-semibold rounded-full cursor-pointer focus:ring-4 focus:ring-gray-100"
            onClick={handleInputClick}
          >
            <div
              className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mr-4"
              style={{ background: 'lightgreen', color: 'white', marginLeft: '-20px', fontWeight: 'bold' }}
            >
              {userProfile}
            </div>
            <input
              type="text"
              id="create_block"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl block w-full p-2.5 cursor-pointer outline-none"
              placeholder="Do you want to create a blog?"
              readOnly
            />
          </label>
        </div>
      )}
      <div className="md:w-[600px] mx-auto">
        {/* Assuming Blog component renders each individual blog post */}
        {/* Pass userProfile if needed by Blog component */}
        <Blog /> {/* Assuming Blog component renders the blog posts */}
      </div>
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
    </div>
  );
};

export default Blogs;
