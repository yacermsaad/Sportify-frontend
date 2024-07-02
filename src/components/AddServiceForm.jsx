import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
 const [serviceName,setServiceName] = useState("");
  
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [images, setImages] = useState('');
  const [coachId, setCoachId] = useState('');

  useEffect(() => {
    const storedCoach = JSON.parse(localStorage.getItem('user'));
    if (storedCoach && storedCoach.id) {
      setCoachId(storedCoach.id);
    } else {
      alert('No coach found in local storage');
    }
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('titre', serviceName);
    formData.append('description', serviceDescription);
    formData.append('prix', servicePrice);
    formData.append('coach_id', coachId);
    formData.append('images', images);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Service created successfully');
    } catch (error) {
      console.error('There was an error creating the service!', error);
      if (error.response) {
        console.log(error.response.data);
      }
      alert('Failed to create service. Please check your input and try again.');
    }
  };

  const handleImageChange = (e) => {
    setImages(e.target.files[0]);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-2xl">
      <h1 className="text-xl font-bold mb-4" style={{ textAlign: 'center' }}>Start Add Service</h1>
      <div>
        <label htmlFor="serviceName" className="block text-lg font-medium text-gray-700">Service Name:</label>
        <input
          type="text"
          id="serviceName"
          onChange={(e)=>{setServiceName(e.target.value)}}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="serviceDescription" className="block text-lg font-medium text-gray-700">Service Description:</label>
        <textarea
          id="serviceDescription"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="images" className="block text-lg font-medium text-gray-700">Upload Images:</label>
        <input
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Service
      </button>
    </form>
  );
};

export default AddServiceForm;
