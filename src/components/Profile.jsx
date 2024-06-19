import React, { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';

const Profile = () => {
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



    return (
        <div className="bg-white">
           
            <div className="w-full text-white bg-green-300">
                <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto md:px-6 lg:px-8">
                    <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
                    Profile
                    </a>
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {!isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </button>
                    <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'}`}>
                        <div className="relative">
                            <button
                                onClick={toggleMenu}
                                className="flex items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline"
                            >
                            {postData && (
                              <div>
                              <span>{postData.fullname}</span>
                              <img className="inline h-6 rounded-full" src={postData.image} alt="Avatar" />
                              </div>
                             )}
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className={`inline w-4 h-4 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                           {/* 
<div
  className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${
    isOpen ? 'block' : 'hidden'
  }`}
>
  <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-blue-800 shadow-sm">
    <a
      href="#"
      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    >
      Settings
    </a>
    <a
      href="#"
      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    >
      Help
    </a>
    <div className="border-b"></div>
    <a
      href="#"
      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    >
      Logout
    </a>
  </div>
</div>
*/}

                        </div>
                    </nav>
                </div>
            </div>

            
            {/* End of Navbar */}

            {/* Profile Section */}
                                    <div style={{display:"flex"}}>
                                    <div className="container mx-auto my-5 p-5" style={{marginTop:"-20px"}} >
                                    <div className="md:flex no-wrap md:-mx-2">
                                        {/* Left Side - Profile Card */}
                                        {postData && (
                                        <div className="w-full md:w-3/12 md:mx-2" >
                                        <div className="bg-white min-h-screen flex items-center justify-center">
                                        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                                          <img className="w-32 h-32 rounded-full mx-auto" src={postData.image} alt="Profile picture" />
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
                                            
                                            </div>
                    
                                            <div className="my-4"></div>
                    
                                            {/* Friends card */}
                                           
                    
                                            <div className="profile-container  bg-white rounded-lg shadow-md p-5" >


                                            <div className="section description">
                                            <div className="section-header">
                                              <h2 style={{ fontSize: "22px" }}><i className="fa-solid fa-pen"></i> Description</h2>
                                              <button className="edit-button" onClick={handleEditClick}>
                                                <i className="fa-solid fa-pen-to-square"></i> Edit
                                              </button>
                                            </div>
                                            <br /><br />
                                      
                                            {isEditing ? (
                                              <div className="max-w-screen-sm">
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
                                                  <p className="break-words">{description}</p>
                                                </div>
                                              )
                                            )}
                                          </div>
                                            <hr />
                                           
                                            




                                            <div className="section skills">
                                            <div className="section-header">
                                              <h2 style={{ fontSize: "22px" }}><i className="fa-solid fa-person-walking"></i> Skills</h2>
                                              <button className="add-button" onClick={toggleFormVisibilitySkill}>+ Add New</button>
                                            </div>
                                            <br /><br />
                                      
                                            {showFormSkill && (
                                              <div className="border-2 border-gray-300 rounded-md shadow-lg p-6">
                                                <h2 className="text-lg font-bold mb-2">Add New Skill</h2>
                                                <form className="space-y-4" onSubmit={handleSubmitSkill}>
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
                                                        focusedInput === 'label' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
                                                      }`}
                                                    />
                                                  </div>
                                                  <div className="flex flex-col">
                                                    <label htmlFor="niveau">Level:</label>
                                                    <input
                                                      type="text"
                                                      id="niveau"
                                                      name="niveau"
                                                      value={skillData.niveau}
                                                      onChange={handleChangeSkill}
                                                      onFocus={handleFocus}
                                                      onBlur={handleBlur}
                                                      required
                                                      className={`border border-gray-300 rounded px-3 py-1 ${
                                                        focusedInput === 'niveau' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
                                                      }`}
                                                    />
                                                  </div>
                                                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                                    Add Skill
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                                    onClick={toggleFormVisibilitySkill}
                                                  >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                  </button>
                                                </form>
                                              </div>
                                            )}
                                            <ul>
                                              {postData && postData.skills ? (
                                                postData.skills.map((skill, index) => (
                                                  <div key={index} style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: '10px', padding: '10px', borderRadius: '5px' }}>
                                                    <li><label>Title: </label>{skill.label}</li>
                                                    <li><label>Level: </label>{skill.niveau}</li>
                                                    <button
                                                      onClick={() => handleDeleteSkill(skill.id)}
                                                      className="mt-2 px-4 py-2 bg-green-500 hover:bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    >
                                                      Delete <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                    <br /> {/* Line break after each skill */}
                                                  </div>
                                                ))
                                              ) : (
                                                <li>Loading skills...</li>
                                              )}
                                            </ul>
                                          </div>




                                            <hr />
                                          
      <div className="section education">
      <div className="section-header">
        <h2 style={{fontSize:"22px"}}> <i class="fa-solid fa-school"></i>  Education</h2>
        <button className="add-button">+ Add New</button>
      </div><br></br><br></br>
      <ul>
        {postData && postData.educations ? (
          postData.educations.map((educationItem) => (
            <li key={educationItem.id}>
              <strong>Label:</strong> {educationItem.label}<br />
              <strong>Speciality:</strong> {educationItem.speciality}<br />
              <strong>Year:</strong> {educationItem.anne}<br />
              <strong>School:</strong> {educationItem.ecole}<br />
              <strong>Country:</strong> {educationItem.paye_ecole}<br />
            </li>
          ))
        ) : (
          <li>Loading education...</li>
        )}
      </ul>
    </div>

    <hr/>


    <div className="section certifications">
    <div className="section-header">
      <h2 style={{fontSize:"22px"}}> <i class="fa-solid fa-certificate"></i> Certifications</h2>
      <button className="add-button" onClick={toggleFormVisibility}>+ Add New</button>
    </div><br></br><br></br>

    <div className="container mx-auto mt-5">
    <div className="container mx-auto mt-5">
    {showForm ? (
      <div className="border-2 border-gray-300 rounded-md shadow-lg p-6">
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
                focusedInput === 'label' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                focusedInput === 'certifier_par' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                focusedInput === 'anne' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
              }`}
            />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Add Certification
          </button>
          <button
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>
      </div>
    ) : null}
    <br />
  </div>
</div>
<ul className="space-y-4">
{postData && postData.certificats ? (
  postData.certificats.map((certificate) => (
    <li key={certificate.id} className="border p-4 rounded" style={{ boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)' }}>
      <strong>Label:</strong> {certificate.label}<br />
      <strong>Certified By:</strong> {certificate.certifier_par}<br />
      <strong>Year:</strong> {certificate.anne}<br />
      <button
      onClick={() => handleDelete(certificate.id)}
      className="mt-2 px-4 py-2 bg-green-500 hover:bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Delete <i class="fa-solid fa-trash"></i>
    </button>
    </li>
  ))
) : (
  <li>Loading certifications...</li>
)}
</ul>

   
  </div>
                                        </div>



                                      {/* Friends card */}
                                           



                                            </div>



                                            <div className="flex items-center justify-center h-screen ">
                                            <div style={{ width: "800px", background: "white", height: "50px",marginRight:"1200px",position:"absolute",marginTop:"-550px", boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",borderRadius:"10px"}}>
                                                <button style={{marginLeft:"250px",marginTop:"13px" }} onClick={FormBlog}>
                                                <i class="fa-solid fa-plus" style={{color:"lightgreen"}}></i> Add Service
                                                </button>
                                                <button style={{marginLeft:"30px"}}  onClick={ShowListBlog}> 
                                                <i class="fa-solid fa-list" style={{color:"lightgreen"}}></i> List blog
                                                </button>
                                            </div>
                                        </div>
                                    

                                      
                                    
                                    
                                    </div>


                                    {blogFrom==true ?
                                        
                                        <div className=" min-h-screen md:px-20 pt-6" style={{marginLeft:"200px",marginTop:"-1800px"}}>
      <div className="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD SERVICE </h1>
        <form  >
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="text-lx font-serif">Title:</label>
              <input
                type="text"
                placeholder="title"
                id="title"
               
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="write here.."
              
                className="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name" className="text-lx font-serif">Name:</label>
              <input
                type="text"
                placeholder="name"
                id="name"
                
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lx font-serif">Email:</label>
              <input
                type="text"
                placeholder="email"
                id="email"
               
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
              style={{background:"lightgreen",color:"white"}}
            >
              ADD POST
            </button>
          </div>
        </form>
      </div>
    </div>
                                        
                                        
                                        
                                        : null 

                                }




                                {ListBlog ? (
                                  <div className="p-6  px-0" style={{marginLeft:"580px",marginTop:"-2520px"}} >
                                    <table className="mt-4  min-w-max table-auto text-left" >
                                      <thead>
                                        <tr className="bg-blue-gray-50">
                                          <th className="cursor-pointer border-b border-blue-gray-100 p-4">
                                            <div className="flex items-center justify-between">
                                              <span className="text-sm text-blue-gray-900 font-normal">Blog</span>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                              </svg>
                                            </div>
                                          </th>
                                          <th className="cursor-pointer border-b border-blue-gray-100 p-4">
                                            <div className="flex items-center justify-between">
                                              <span className="text-sm text-blue-gray-900 font-normal">Posted by</span>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                              </svg>
                                            </div>
                                          </th>
                                         
                                          <th className="cursor-pointer border-b border-blue-gray-100 p-4">
                                            <div className="flex items-center justify-between">
                                              <span className="text-sm text-blue-gray-900 font-normal">Status</span>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                              </svg>
                                            </div>
                                          </th>
                                         
                                       
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="bg-white">
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex items-center gap-3">
                                              <div className="flex flex-col">
                                                <p className="text-sm font-normal text-blue-gray-900">Blog 1</p>
                                                <p className="text-sm font-normal text-blue-gray-900 opacity-70">Start date: 10 Dec 2023</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex items-center gap-3">
                                              <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="w-9 h-9 rounded-full" />
                                              <div className="flex flex-col">
                                                <p className="text-sm font-normal text-blue-gray-900">John Michael</p>
                                                <p className="text-sm font-normal text-blue-gray-900 opacity-70">john@creative-tim.com</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex flex-col">
                                              <p className="text-sm font-normal text-green-600">Accepted</p>
                                            </div>
                                          </td>
                                         
                                          
                                        </tr>
                                        <tr className="bg-white">
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex items-center gap-3">
                                              <div className="flex flex-col">
                                                <p className="text-sm font-normal text-blue-gray-900">Blog 2 </p>
                                                <p className="text-sm font-normal text-blue-gray-900 opacity-70">Start date: 11 Dec 2023</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex items-center gap-3">
                                              <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Alexa Liras" className="w-9 h-9 rounded-full" />
                                              <div className="flex flex-col">
                                                <p className="text-sm font-normal text-blue-gray-900">Alexa Liras</p>
                                                <p className="text-sm font-normal text-blue-gray-900 opacity-70">alexa@creative-tim.com</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="p-4 border-b border-blue-gray-100">
                                            <div className="flex flex-col">
                                              <p className="text-sm font-normal text-red-500">Refused</p>
                                            </div>
                                          </td>
                                          
                                          
                                          
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                ) : null }
                                
                                




                    </div>
        );
    };
    
    export default Profile;
    