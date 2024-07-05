import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs')
            .then(response => {
                setBlogs(response.data.blogs.slice(0, 3)); // Limiting to 3 blogs
            })
            .catch(error => {
                console.error('Error fetching the blogs:', error);
            });
    }, []);

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2>
                <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {blogs.map(blog => (
                        <div key={blog.id} className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                            <div className="flex items-center mb-6">
                                <img src={`http://localhost:8000/storage/${blog.images[0].img}`} alt={`${blog.titre} image`} className="rounded-lg w-full" />
                            </div>
                            <div className="block">
                                <h4 className="text-gray-900 font-medium leading-8 mb-9">{blog.titre}</h4>
                                <div className="flex items-center justify-between font-medium">
                                    <h6 className="text-sm text-gray-500">By {blog.coach.fullname}</h6>
                                    <span className="text-sm text-indigo-600"><i class="fa-regular fa-clock"></i> {new Date(blog.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm text-gray-500"><i class="fa-regular fa-heart"></i> ({blog.likes.length})</span>
                                    <span className="text-sm text-gray-500"><i class="fa-regular fa-comment"></i> ({blog.comments.length}) </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <Link to="/blogs">
                    <a href="#" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</a>
                    </Link>
            </div>
        </section>
    );
};

export default BlogGrid;
