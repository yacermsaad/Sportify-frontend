import React from 'react';
import PlaceholderCard from './PlaceholderCard';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem, MDBTable, MDBTableBody, MDBTableHead 
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BlogList from './blogs/BlogList';
import AddServiceForm from './AddServiceForm';
export default function ProfilePage() {
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const storedCoachId = parsedUser ? parsedUser.id : null;
    const [skillData, setSkillData] = useState({
      label: '',
      niveau: '',
      coach_id: storedCoachId,
    });
    const [showFormSkill, setShowFormSkill] = useState(false);
  
    const [postData, setPostData] = useState(null);
    
    const [description, setDescription] = useState(''); 
  const [isEditing, setIsEditing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [blogFrom, setBlogForm] = useState(false);
    const [ListBlog, setListBlog] = useState(false);
    const [showFullInfo, setShowFullInfo] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        if (storedCoachId) {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/coach/${storedCoachId}`);
            setPostData(response.data.coach);
            setDescription(response.data.coach.description); 
            console.log(response.data); // Log the fetched data here
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
  
      fetchData();
    }, [storedCoachId]);
  
   
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleFullInfo = () => {
      setShowFullInfo(!showFullInfo);
    };
  
    const FormBlog = () => {
      setBlogForm(!blogFrom);
      console.log(postData);
      setListBlog(false); // Log the postData here
    };
  
    const ShowListBlog = () => {
      setListBlog(!ListBlog);
      setBlogForm(false);
    };
  
    const [focusedInput, setFocusedInput] = useState(null);
  
    const handleFocus = (e) => {
      setFocusedInput(e.target.name);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };
  
  
    // const nameCoach=postData.coach.fullname
    const [formData, setFormData] = useState({
      label: '',
      certifier_par: '',
      anne: '',
      coach_id: storedCoachId,
  });
  
  const [educationData, setEducationData] = useState({
    label: '',
    speciality: '',
    anne: '',
    ecole: '',
    paye_ecole: '',
    coach_id: storedCoachId, 
  });
  
  const [showFormEducation, setShowFormEducation] = useState(false);
  
  const handleChangeEducation = (e) => {
    setEducationData({ ...educationData, [e.target.name]: e.target.value });
  };
  
  const toggleFormVisibilityEducation = () => {
    setShowFormEducation(!showFormEducation);
  };
  
  const handleChangeSkill = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  };
  const toggleFormVisibilitySkill = () => {
    setShowFormSkill(!showFormSkill);
  };
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Send POST request to server
          const response = await axios.post('http://127.0.0.1:8000/api/certificats', formData);
          console.log('Response:', response.data); 
          
          setFormData({
              label: '',
              certifier_par: '',
              anne: '',
              coach_id: '',
          });
          alert('Certification added successfully!'); 
      } catch (error) {
          console.error('Error:', error); 
          alert('Failed to add certification.'); 
      }
    };
  
    const handleSubmitEducation = async (e) => {
      e.preventDefault();
      try {
       
        const response = await axios.post('http://127.0.0.1:8000/api/educations', educationData);
        console.log('Response:', response.data);
    
       
        setPostData((prevData) => ({
          ...prevData,
          educations: [...prevData.educations, response.data.education], 
        }));
    
        setEducationData({
          label: '',
          speciality: '',
          anne: '',
          ecole: '',
          paye_ecole: '',
          coach_id: '',
        });
        alert('Education added successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to add education.');
      }
    };
    
  
  
    const handleSubmitSkill = async (e) => {
      e.preventDefault();
      try {
        // Send POST request to server
        const response = await axios.post('http://127.0.0.1:8000/api/skills', skillData);
        console.log('Response:', response.data);
        
        // Update the postData state to reflect the new skill
        setPostData((prevData) => ({
          ...prevData,
          skills: [...prevData.skills, response.data.skill], // Assuming the API returns the new skill in response.data.skill
        }));
  
        setSkillData({
          label: '',
          niveau: '',
          coach_id: storedCoachId,
        });
        alert('Skill added successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to add skill.');
      }
    };
  
  
  
  
    const [showForm, setShowForm] = useState(false);
    const toggleFormVisibility = () => {
      setShowForm(!showForm); 
  };
  
  
  
  
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this certification?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/certificats/${id}`);
        console.log(response.data.message);
  
        // Update the state to remove the deleted certification from the list
        setCertifications(certifications.filter(cert => cert.id !== id));
      } catch (error) {
        console.error('Error deleting certification:', error);
      }
    }
  };
  
  
  const handleDeleteSkill = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this skill?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/skills/${id}`);
        console.log(response.data.message);
  
        // Update the postData state to remove the deleted skill
        setPostData((prevData) => ({
          ...prevData,
          skills: prevData.skills.filter((skill) => skill.id !== id),
        }));
  
      } catch (error) {
        console.error('Error deleting skill:', error);
      }
    }
  };
  
  
  
  
  
  const handleDeleteEducation = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this skill?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/educations/${id}`);
        console.log(response.data.message);
  
      } catch (error) {
        console.error('Error deleting skill:', error);
      }
    }
  };
  
  
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleCancelClick = () => {
      setIsEditing(false);
    };
  
    const handleChangeDescription = (e) => {
      setDescription(e.target.value);
    };
  
    const handleSubmitDescription = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/coaches/${storedCoachId}/description`, {
          description: description,
        });
        console.log('Response:', response.data);
  
        setDescription(response.data.coach.description); 
        setIsEditing(false); 
        alert('Description updated successfully!');
      } catch (error) {
        console.error('Error updating description:', error);
        alert('Failed to update description.');
      }
    };

    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [servicePrice, setServicePrice] = useState('');
  
    // const handleFormSubmit = (e) => {
    //   e.preventDefault();
    //   // Logic to add the service
    //   console.log('Service Added:', { serviceName, serviceDescription, servicePrice });
    //   // Reset form fields
    //   setServiceName('');
    //   setServiceDescription('');
    //   setServicePrice('');
    // };

    const [blogs, setBlogs] = useState([]);
    const userId = JSON.parse(localStorage.getItem('user'));
  
    useEffect(() => {
      fetchUserBlogs();
    }, []);
  
    const fetchUserBlogs = async () => {
      if(userId!=undefined)
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${userId.id}/blogs`);
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
  
    // const handleDeleteBlo = async (blogId) => {
    //   const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');
    //   if (confirmDelete) {
    //     try {
    //       const response = await axios.delete(`http://localhost:8000/api/users/${userId}/blogs/${blogId}`);
    //       console.log(response.data.message);
  
    //       setBlogs(blogs.filter((blog) => blog.id !== blogId));
    //     } catch (error) {
    //       console.error('Error deleting blog:', error);
    //     }
    //   }
    // };

 
  
    useEffect(() => {
      fetchUserBlogs();
    }, []);
  
   
  
  
  
    const handleDeleteBlog = async (blogId) => {
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
    const [coachId, setCoachId] = useState('');
    const [images, setImages] = useState([]);

  // const handleFormSubmitService = async (event) => {
  //   event.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append('titre', serviceName);
  //   formData.append('description', serviceDescription);
  //   formData.append('prix', servicePrice);
  //   formData.append('coache_id', coachId);
  //   images.forEach((image, index) => {
  //     formData.append(`images[${index}]`, image);
  //   });

  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/services', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log(response.data);
  //     alert('Service created successfully');
  //   } catch (error) {
  //     console.error('There was an error creating the service!', error);
  //     alert('Failed to create service');
  //   }
  // };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };
    const breadcrumbContainerStyle = {
      backgroundColor: 'lightgreen',
      borderRadius: '0.375rem',
      padding: '1rem',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
    };
  
    const breadcrumbItemStyle = {
      display: 'flex',
      alignItems: 'center',
      margin: '0 0.5rem',
    };
  
    const buttonStyle = {
      display: 'inline-flex',
      justifyContent: 'center',
      padding: '0.5rem 1rem',
      border: 'none',
      boxShadow: '0 0.25rem 0.375rem rgba(0, 0, 0, 0.15)',
      fontSize: '0.875rem',
      fontWeight: 'medium',
      borderRadius: '0.375rem',
      color: 'green-500',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    };
  

   
  
  return (
    <section >
    
    <Navbar/>
    
    {postData!=null?
    <>
      <MDBContainer className="py-5" style={{marginTop:"100px"}}>
    <div style={{marginLeft:"100px",width:"100%"}}>
    <div style={breadcrumbContainerStyle} >
    <div style={breadcrumbItemStyle}>
      <button
        onClick={FormBlog}
        type="button"
        style={buttonStyle}
      >
        You want to add a service?
      </button>
    </div>
    <div style={breadcrumbItemStyle}>
      <button
      onClick={ShowListBlog}
        type="button"
        style={buttonStyle}
      >
        You want to show a list blogs?
      </button>
    </div>
  </div>
    </div>
        <div className="md:flex no-wrap md:-mx-2">
        {/* Left Side - Profile Card */}
        {postData && (
        <div className="w-full md:w-3/12 md:mx-2" style={{marginLeft:"100px",width:"400px",marginTop:"-15px"}}>
        <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img className="w-32 h-32 rounded-full mx-auto" src= {`http://localhost:8000/storage/${postData.image}`} alt="Profile picture" />
          <h2 className="text-center text-2xl font-semibold mt-3">{postData.fullname}</h2>
          <p className="text-center text-gray-600 mt-1">@{postData.fullname}</p>

          <div style={{marginLeft:"115px"}}>
          <a href={postData.profil_linkdine}><i class="fa-brands fa-linkedin"></i></a> &nbsp; <a href={postData.website}><i class="fa-solid fa-globe"></i></a>

          
          </div>



          <div className="flex justify-center mt-5">
      <button style={{background:"lightgreen",height:"42px",width:"250px",borderRadius:"8px"}}>Preview Sportify Profile</button>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="text-gray-600 mt-2">
              John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.
            </p>
          </div>
          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
              <span><i class="fa-solid fa-location-dot" style={{color:"lightgreen"}}> </i> From</span>
              <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Morocco</span>
              </span>
          </li>
          <li className="flex items-center py-3">
              <span><i class="fa-solid fa-user" style={{color:"lightgreen"}}></i> Member since</span>
              <span className="ml-auto">Nov 07, 2016</span>
          </li>
      </ul>
        </div>
      </div></div>
    )}


   {postData? <div className="col-lg-8" style={{marginTop:"60px"}}>
    <div className="card mb-4">
    <div className="p-6 bg-white shadow rounded">
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <p className="font-medium text-gray-700">Full Name</p>
    </div>
    <div className="col-span-2">
      <p className="text-gray-600">{postData.fullname}</p>
    </div>
  </div>
  <hr className="mb-4"/>
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <p className="font-medium text-gray-700">Email</p>
    </div>
    <div className="col-span-2">
      <p className="text-gray-600">example@example.com</p>
    </div>
  </div>
  <hr className="mb-4"/>
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <p className="font-medium text-gray-700">Creation du compte</p>
    </div>
    <div className="col-span-2">
      <p className="text-gray-600">{postData.created_at}</p>
    </div>
  </div>
  <hr className="mb-4"/>
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <p className="font-medium text-gray-700">Mobile</p>
    </div>
    <div className="col-span-2">
      <p className="text-gray-600">(098) 765-4321</p>
    </div>
  </div>
  <hr className="mb-4"/>
  <div className="grid grid-cols-3 gap-4">
    <div>
      <p className="font-medium text-gray-700">Address</p>
    </div>
    <div className="col-span-2">
      <p className="text-gray-600">Bay Area, San Francisco, CA</p>
    </div>
  </div>
</div>

    </div>

    <div className="row">
      <div className="col-md-6">
        <div className="card" style={{ marginLeft: "0px", width: "860px", background: "white",  padding: "20px", borderRadius: "10px" }}>
          <div>
            {blogFrom ? (
             <AddServiceForm />

          ) : null}
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          {ListBlog ? (
            <table style={{ marginLeft: "10px", marginTop: "80px",width:"100%" }}>
              <thead style={{color:"white"}}>
                <tr className="text-left border-b-2 border-gray-300">
                  <th className="px-4 py-2 bg-green-400">Title</th>
                  <th className="px-4 py-2 bg-green-400">Content</th>
                  <th className="px-4 py-2 bg-green-400">Coach</th>
                  <th className="px-4 py-2 bg-green-400">Date</th>
                  <th className="px-4 py-2 bg-green-400">Status</th>
                  <th className="px-4 py-2 bg-green-400">Actions</th>
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
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  </div>:null}
            
            </div>
        
      </MDBContainer> 
      <div className="profile-container  bg-white rounded-lg shadow-md p-5"  style={{marginLeft:" 80px",marginTop:"-80px",width:"350px"}}>


      <div className="section description">
      <div className="section-header">
        <h2 style={{ fontSize: "22px",marginLeft:"-20px" }}><i class="fa-solid fa-circle-chevron-right"></i> Description</h2>
        <button 
        className="add-button bg-green-400 hover:bg-green-600 rounded-full" 
        onClick={handleEditClick} 
        style={{
          width: "33px", 
          height: "33px", 
          borderRadius: "50%",
          padding: "0", 
          marginLeft: "250px",
          position: "absolute"
        }}
      >
      <i class="fa-solid fa-pen-nib"  style={{
        color: "white",
        fontSize: "16px",
      }}></i>
      </button>
      </div>
      <br /><br />

      {isEditing ? (
        <div className="max-w-screen-sm" style={{width:"350px",marginLeft:"-40px"}}>
          <form onSubmit={handleSubmitDescription}>
            <textarea
              value={description}
              onChange={handleChangeDescription}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              rows="5"
            ></textarea>
            <div className="mt-2">
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Save
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        postData && (
          <div className="max-w-screen-sm">
            <p className="break-words" style={{fontSize:"20px"}}>{description}</p>
          </div>
        )
      )}
    </div>
   

     
      




    <div className="section skills" style={{marginTop:"100px"}}>
    <div className="section-header">
      <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-20px" }}>
        <i className="fa-solid fa-circle-chevron-right"></i> Skills
      </h2>
      <button
        className="add-button bg-green-500 hover:bg-green-600 rounded-full"
        onClick={toggleFormVisibilitySkill}
        style={{
          width: "33px",
          height: "33px",
          borderRadius: "50%",
          padding: "0",
          marginLeft: "250px",
          position: "absolute"
        }}
      >
        <i
          className="fa-solid fa-plus"
          style={{
            color: "white",
            fontSize: "16px",
          }}
        ></i>
      </button>
    </div>
    <br />
    <br />
  
    {showFormSkill && (
      <div
        className="border-2 border-gray-300 rounded-md shadow-lg p-6"
        style={{ width: "320px", marginLeft: "-26px" }}
      >
        <h2 className="text-lg font-bold mb-2">Add New Skill</h2>
        <form className="space-y-4" onSubmit={handleSubmitSkill} >
          <div className="flex flex-col">
            <label htmlFor="label">Label:</label>
            <input
              type="text"
              id="label"
              name="label"
              value={skillData.label}
              onChange={handleChangeSkill}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={`border border-gray-300 rounded px-3 py-1 ${
                focusedInput === "label"
                  ? "border-t-2 border-blue-500 transition-all duration-300"
                  : ""
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="niveau">Level:</label>
            <select
              id="niveau"
              name="niveau"
              value={skillData.niveau}
              onChange={handleChangeSkill}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={`border border-gray-300 rounded px-3 py-1 ${
                focusedInput === "niveau"
                  ? "border-t-2 border-blue-500 transition-all duration-300"
                  : ""
              }`}
            >
              <option value="">Select Level</option>
              <option value="Experience Level">Experience Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            style={{ width: "250px", marginLeft: "10px" }}
          >
            Add Skill
          </button>
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={toggleFormVisibilitySkill}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </div>
    )}
  
    <div className="mt-4">
      {postData && postData.skills ? (
        <table className="min-w-full bg-lightgreen" style={{marginLeft:"-40px"}}>
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">Level</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {postData.skills.map((skill, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{skill.label}</td>
                <td className="py-2 px-4 border-b border-gray-200">{skill.niveau}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                   <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading skills...</p>
      )}
    </div>
  </div>
  
    




  
    
      <div className="section education" style={{marginTop:"100px"}}>
      <div className="section-header">
        <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-20px" }}>
          <i className="fa-solid fa-circle-chevron-right"></i> Education
        </h2>
        <button
          className="add-button bg-green-500 hover:bg-green-600 rounded-full"
          onClick={toggleFormVisibilityEducation}
          style={{
            width: "33px",
            height: "33px",
            borderRadius: "50%",
            padding: "0",
            marginLeft: "250px",
            position: "absolute"
          }}
        >
          <i
            className="fa-solid fa-plus"
            style={{
              color: "white",
              fontSize: "16px",
            }}
          ></i>
        </button>
      </div>
      <br />
      <br />
    
      {showFormEducation && (
        <div
          className="border-2 border-gray-300 rounded-md shadow-lg p-6"
          style={{ width: "330px", marginLeft: "-30px" }}
        >
          <h2 className="text-lg font-bold mb-2">Add New Education</h2>
          <form className="space-y-4" onSubmit={handleSubmitEducation}>
            <div className="flex flex-col">
              <label htmlFor="label">Label:</label>
              <input
                type="text"
                id="label"
                name="label"
                value={educationData.label}
                onChange={handleChangeEducation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`border border-gray-300 rounded px-3 py-1 ${
                  focusedInput === "label"
                    ? "border-t-2 border-blue-500 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="speciality">Speciality:</label>
              <input
                type="text"
                id="speciality"
                name="speciality"
                value={educationData.speciality}
                onChange={handleChangeEducation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`border border-gray-300 rounded px-3 py-1 ${
                  focusedInput === "speciality"
                    ? "border-t-2 border-blue-500 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="anne">Year:</label>
              <input
                type="number"
                id="anne"
                name="anne"
                value={educationData.anne}
                onChange={handleChangeEducation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`border border-gray-300 rounded px-3 py-1 ${
                  focusedInput === "anne"
                    ? "border-t-2 border-blue-500 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ecole">School:</label>
              <input
                type="text"
                id="ecole"
                name="ecole"
                value={educationData.ecole}
                onChange={handleChangeEducation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`border border-gray-300 rounded px-3 py-1 ${
                  focusedInput === "ecole"
                    ? "border-t-2 border-blue-500 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="paye_ecole">Country of School:</label>
              <input
                type="text"
                id="paye_ecole"
                name="paye_ecole"
                value={educationData.paye_ecole}
                onChange={handleChangeEducation}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className={`border border-gray-300 rounded px-3 py-1 ${
                  focusedInput === "paye_ecole"
                    ? "border-t-2 border-blue-500 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              style={{ width: "250px", marginLeft: "10px" }}
            >
              Add Education
            </button>
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleFormVisibilityEducation}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    
      <div className="mt-4 overflow-x-auto">
        {postData && postData.educations ? (
          <table className="min-w-full bg-white table-auto" >
            <thead>
              <tr>
                <th className="py-2 px-3 border-b border-gray-200">Label</th>
                <th className="py-2 px-3 border-b border-gray-200">Speciality</th>
                <th className="py-2 px-3 border-b border-gray-200">Year</th>
                <th className="py-2 px-3 border-b border-gray-200">School</th>
                <th className="py-2 px-3 border-b border-gray-200">Country</th>
                <th className="py-2 px-3 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {postData.educations.map((education, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-3 border-b border-gray-200">{education.label}</td>
                  <td className="py-2 px-3 border-b border-gray-200">{education.speciality}</td>
                  <td className="py-2 px-3 border-b border-gray-200">{education.anne}</td>
                  <td className="py-2 px-3 border-b border-gray-200">{education.ecole}</td>
                  <td className="py-2 px-3 border-b border-gray-200">{education.paye_ecole}</td>
                  <td className="py-2 px-3 border-b border-gray-200 text-right">
                    <button
                      onClick={() => handleDeleteEducation(education.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                     <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading education...</p>
        )}
      </div>
    </div>
    
    
    


<div className="section certifications" style={{marginTop:"100px"}}>
  <div className="section-header">
    <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-20px" }}>
      <i className="fa-solid fa-circle-chevron-right"></i> Certifications
    </h2>
    <button
      className="add-button bg-green-500 hover:bg-green-600 rounded-full"
      onClick={toggleFormVisibility}
      style={{
        width: "33px",
        height: "33px",
        borderRadius: "50%",
        padding: "0",
        marginLeft: "250px",
        position: "absolute"
      }}
    >
      <i
        className="fa-solid fa-plus"
        style={{
          color: "white",
          fontSize: "16px",
        }}
      ></i>
    </button>
  </div>
  <br />
  <br />

  <div className="container mx-auto mt-5">
    {showForm && (
      <div
        className="border-2 border-gray-300 rounded-md shadow-lg p-6 relative"
        style={{ width: "320px", marginLeft: "-26px" }}
      >
        <h2 className="text-lg font-bold mb-2">Add New Certification</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="label">Label:</label>
            <input
              type="text"
              id="label"
              name="label"
              value={formData.label}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={`border border-gray-300 rounded px-3 py-1 ${
                focusedInput === "label"
                  ? "border-t-2 border-blue-500 transition-all duration-300"
                  : ""
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="certifier_par">Certified By:</label>
            <input
              type="text"
              id="certifier_par"
              name="certifier_par"
              value={formData.certifier_par}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={`border border-gray-300 rounded px-3 py-1 ${
                focusedInput === "certifier_par"
                  ? "border-t-2 border-blue-500 transition-all duration-300"
                  : ""
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="anne">Year:</label>
            <input
              type="number"
              id="anne"
              name="anne"
              value={formData.anne}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={`border border-gray-300 rounded px-3 py-1 ${
                focusedInput === "anne"
                  ? "border-t-2 border-blue-500 transition-all duration-300"
                  : ""
              }`}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            style={{ width: "250px", marginLeft: "10px" }}
          >
            Add Certification
          </button>
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={toggleFormVisibility}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </div>
    )}
  </div>

  <div className="mt-4 overflow-x-auto">
    {postData && postData.certificats ? (
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr>
            <th className="py-2 px-3 border-b border-gray-200">Label</th>
            <th className="py-2 px-3 border-b border-gray-200">Certified By</th>
            <th className="py-2 px-3 border-b border-gray-200">Year</th>
            <th className="py-2 px-3 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {postData.certificats.map((certificate, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-3 border-b border-gray-200">{certificate.label}</td>
              <td className="py-2 px-3 border-b border-gray-200">{certificate.certifier_par}</td>
              <td className="py-2 px-3 border-b border-gray-200">{certificate.anne}</td>
              <td className="py-2 px-3 border-b border-gray-200 text-right">
                <button
                  onClick={() => handleDelete(certificate.id)}
                  className="text-red-600 hover:text-red-800"
                >
                 <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Loading certifications...</p>
    )}
  </div>
</div>

  </div>
  </>
  :<PlaceholderCard/>
  }
 
    </section>
  );
}