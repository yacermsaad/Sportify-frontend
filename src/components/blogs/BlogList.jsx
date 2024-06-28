import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user')).id; 

  useEffect(() => {
    fetchUserBlogs();
  }, []);

  const fetchUserBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${userId}/blogs`);
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching user blogs:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleDelete = async (blogId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/users/${userId}/blogs/${blogId}`);
        console.log(response.data.message); 
        
        setBlogs(blogs.filter(blog => blog.id !== blogId));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-10" style={{marginLeft:"600px",marginTop:"-1900px",position:"absolue"}}>
      <h1 className="text-2xl font-bold mb-5">Your Blogs</h1>
      <table className="bg-white shadow-lg rounded-lg mt-6">
        <thead>
          <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-2 bg-gray-200">Title</th>
            <th className="px-4 py-2 bg-gray-200">Content</th>
            <th className="px-4 py-2 bg-gray-200">Coach</th>
            <th className="px-4 py-2 bg-gray-200">Date</th>
            <th className="px-4 py-2 bg-gray-200">Status</th>
            <th className="px-4 py-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="px-4 py-2 border-b">{blog.titre}</td>
              <td className="px-4 py-2 border-b">{blog.contenu}</td>
              <td className="px-4 py-2 border-b">{blog.coach.fullname}</td>
              <td className="px-4 py-2 border-b">{formatDate(blog.created_at)}</td>
              <td className="px-4 py-2 border-b">Accepted</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
