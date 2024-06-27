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
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

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
  
  return (
    <section >
    <Navbar/>
      <MDBContainer className="py-5" style={{marginTop:"200px"}}>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#' onClick={FormBlog}>Add service </a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">List blog</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
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
                  style={{ width: '150px',marginLeft:"110px" }}
                  fluid />
                <p className="text-muted mb-1">Coach</p>
                <p className="text-muted mb-4">From : Morocco</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
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
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
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
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
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
                <MDBCard className="mb-4 mb-md-0">
                {blogFrom==true ?
                                        
  <h1>Hello</h1>
                    
                    
                    
                    : null 

            }
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>)}
      </MDBContainer> 
      <div className="profile-container  bg-white rounded-lg shadow-md p-5"  style={{marginLeft:"100px",marginTop:"-100px"}}>


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
              <select
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
              >
                <option value="">Select Level</option>
                <option value="Experience Level">Experience Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
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
        <h2 style={{ fontSize: "22px" }}><i className="fa-solid fa-school"></i> Education</h2>
        <button className="add-button" onClick={toggleFormVisibilityEducation}>+ Add New</button>
      </div>
      <br /><br />

      {showFormEducation && (
        <div className="border-2 border-gray-300 rounded-md shadow-lg p-6">
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
                  focusedInput === 'label' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                  focusedInput === 'speciality' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                  focusedInput === 'anne' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                  focusedInput === 'ecole' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
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
                  focusedInput === 'paye_ecole' ? 'border-t-2 border-blue-500 transition-all duration-300' : ''
                }`}
              />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Add Education
            </button>
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleFormVisibilityEducation}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <ul>
        {postData && postData.educations ? (
          postData.educations.map((education, index) => (
            <div key={index} style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: '10px', padding: '10px', borderRadius: '5px' }}>
              <li><label>Label: </label>{education.label}</li>
              <li><label>Speciality: </label>{education.speciality}</li>
              <li><label>Year: </label>{education.anne}</li>
              <li><label>School: </label>{education.ecole}</li>
              <li><label>Country: </label>{education.paye_ecole}</li>
              <button
                onClick={() => handleDeleteEducation(education.id)}
                className="mt-2 px-4 py-2 bg-green-500 hover:bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                Delete <i className="fa-solid fa-trash"></i>
              </button>
              <br /> 
            </div>
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
    </section>
  );
}