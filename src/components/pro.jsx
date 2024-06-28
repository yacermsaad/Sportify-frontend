import React from 'react';
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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BlogList from './blogs/BlogList';
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
      console.log(postData); // Log the postData here
    };
  
    const ShowListBlog = () => {
      setListBlog(!ListBlog);
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
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Logic to add the service
      console.log('Service Added:', { serviceName, serviceDescription, servicePrice });
      // Reset form fields
      setServiceName('');
      setServiceDescription('');
      setServicePrice('');
    };

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
  
    const handleDeleteBlo = async (blogId) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');
      if (confirmDelete) {
        try {
          const response = await axios.delete(`http://localhost:8000/api/users/${userId}/blogs/${blogId}`);
          console.log(response.data.message);
  
          setBlogs(blogs.filter((blog) => blog.id !== blogId));
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      }
    };

 
  
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
  
   
  
  return (
    <section >
    <Navbar/>
      <MDBContainer className="py-5" style={{marginTop:"100px"}}>
        <MDBRow>
        <MDBCol>
        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 d-flex justify-content-center">
          <MDBBreadcrumbItem className="d-flex align-items-center">
            <button
              onClick={FormBlog}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
            >
              You want to add a service?
            </button>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem className="d-flex align-items-center">
            <button
              onClick={ShowListBlog}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
            >
              You want to show a list blogs?
            </button>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBCol>
      
        </MDBRow>
        {postData && (
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">

              <MDBCardBody className="text-center">
                <MDBCardImage
                src= {`http://localhost:8000/storage/${postData.image}`}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '120px',marginLeft:"130px",height:"120px"}}
                  fluid />
                  <p className="text-muted mb-1" style={{fontSize:"30px" , fontWeight:"bold",color:"black"}}>{postData.fullname}</p>
                <p className="text-muted mb-1">@{postData.fullname}</p>
                <div className="mt-5">
                <h1 className="text-2xl font-semibold" >Bio</h1>
                <p className="text-gray-600 mt-2">
                  John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.
                </p>
              </div>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm" style={{width:"260px",marginLeft:"60px"}}>
                                          <li className="flex items-center py-3">
                                              <span><i class="fa-solid fa-location-dot" style={{color:"black"}}> </i> From</span>
                                              <span className="ml-auto">
                                                  <span className="bg-black py-1 px-2 rounded text-white text-sm">Morocco</span>
                                              </span>
                                          </li>
                                          <li className="flex items-center py-3">
                                              <span><i class="fa-solid fa-user" style={{color:"black"}}></i> Member since</span>
                                              <span className="ml-auto">Nov 07, 2016</span>
                                          </li>
                                      </ul>
              
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <i class="fa-solid fa-globe" style={{fontSize:"20px",color:"black"}}></i>
                    <MDBCardText>{postData.website}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>{postData.profil_linkdine}</MDBCardText>
                  </MDBListGroupItem>
                 
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{postData.fullname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Creation du compte</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{postData.created_at}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
              <MDBCard style={{ marginLeft: "0px", width: "860px", background: "white", boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px" }}>
              <div>
                {blogFrom ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="serviceName" className="block text-lg font-medium text-gray-700">Service Name:</label>
                      <input
                        type="text"
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceDescription" className="block text-lg font-medium text-gray-700">Service Description:</label>
                      <textarea
                        id="serviceDescription"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                      />
                    </div>
                    <div>
                      <label htmlFor="servicePrice" className="block text-lg font-medium text-gray-700">Service Price:</label>
                      <input
                        type="number"
                        id="servicePrice"
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add Service
                    </button>
                  </form>
                ) : null}
              </div>
            </MDBCard>
              </MDBCol>

              <MDBCol md="6">
  <MDBCard>
    {ListBlog ? (
      <table style={{ marginLeft: "-440px", marginTop: "80px" }}>
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
  </MDBCard>
</MDBCol>



            </MDBRow>
          </MDBCol>
        </MDBRow>)}
      </MDBContainer> 
      <div className="profile-container  bg-white rounded-lg shadow-md p-5"  style={{marginLeft:" 70px",marginTop:"-10px",width:"450px"}}>


      <div className="section description">
      <div className="section-header">
        <h2 style={{ fontSize: "22px",marginLeft:"-30px" }}><i class="fa-solid fa-circle-chevron-right"></i> Description</h2>
        <button 
        className="add-button bg-black hover:bg-green-600 rounded-full" 
        onClick={handleEditClick} 
        style={{
          width: "33px", 
          height: "33px", 
          borderRadius: "50%",
          padding: "0", 
          marginLeft: "280px",
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
              <button type="submit" className="bg-black hover:bg-green-600 text-white py-2 px-4 rounded">
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
    <hr   />

     
      




    <div className="section skills">
    <div className="section-header">
      <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-37px" }}>
        <i className="fa-solid fa-circle-chevron-right"></i> Skills
      </h2>
      <button
        className="add-button bg-black hover:bg-green-600 rounded-full"
        onClick={toggleFormVisibilitySkill}
        style={{
          width: "33px",
          height: "33px",
          borderRadius: "50%",
          padding: "0",
          marginLeft: "280px",
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
        style={{ width: "350px", marginLeft: "-20px" }}
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
            className="bg-black hover:bg-green-600 text-white py-2 px-4 rounded"
            style={{ width: "250px", marginLeft: "30px" }}
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
        <table className="min-w-full bg-white" style={{marginLeft:"-40px"}}>
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
                    <i className="fa-solid fa-x"></i>
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
  
    




      <hr />
    
      <div className="section education">
      <div className="section-header">
        <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-37px" }}>
          <i className="fa-solid fa-circle-chevron-right"></i> Education
        </h2>
        <button
          className="add-button bg-black hover:bg-green-600 rounded-full"
          onClick={toggleFormVisibilityEducation}
          style={{
            width: "33px",
            height: "33px",
            borderRadius: "50%",
            padding: "0",
            marginLeft: "280px",
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
          style={{ width: "350px", marginLeft: "-20px" }}
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
              className="bg-black hover:bg-green-600 text-white py-2 px-4 rounded"
              style={{ width: "250px", marginLeft: "30px" }}
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
                      <i className="fa-solid fa-x"></i>
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
    
    
    

<hr/>

<div className="section certifications">
  <div className="section-header">
    <h2 style={{ fontSize: "22px", position: "absolute", marginLeft: "-37px" }}>
      <i className="fa-solid fa-circle-chevron-right"></i> Certifications
    </h2>
    <button
      className="add-button bg-black hover:bg-green-600 rounded-full"
      onClick={toggleFormVisibility}
      style={{
        width: "33px",
        height: "33px",
        borderRadius: "50%",
        padding: "0",
        marginLeft: "280px",
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
        style={{ width: "350px", marginLeft: "-30px" }}
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
            className="bg-black hover:bg-green-600 text-white py-2 px-4 rounded"
            style={{ width: "250px", marginLeft: "30px" }}
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
                  <i className="fa-solid fa-x"></i>
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
    </section>
  );
}