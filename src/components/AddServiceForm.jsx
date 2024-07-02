import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [images, setImages] = useState([null, null, null, null, null]);
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null, null]);
  const [coachId, setCoachId] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    if (images.filter(image => image !== null).length < 5) {
      setErrorMessage('Please upload at least 5 images.');
      setShowErrorModal(true);
      return;
    }

    const formData = new FormData();
    formData.append('titre', serviceName);
    formData.append('description', serviceDescription);
    formData.append('prix', servicePrice);
    formData.append('coach_id', coachId);

    images.forEach((image, index) => {
      if (image) {
        formData.append(`images[${index}]`, image);
      }
    });

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

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);

      const newImagePreviews = [...imagePreviews];
      newImagePreviews[index] = URL.createObjectURL(file);
      setImagePreviews(newImagePreviews);

      // Clear error message if any image is added
      if (errorMessage) {
        setErrorMessage('');
      }
    }
  };

  return (
    <div>
      {showErrorModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p>{errorMessage}</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleFormSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-2xl">
        <h1 className="text-xl font-bold mb-4" style={{ textAlign: 'center' }}>Start Add Service</h1>
        <div>
          <label htmlFor="serviceName" className="block text-lg font-medium text-gray-700">Service Name:</label>
          <input
            type="text"
            id="serviceName"
            onChange={(e) => setServiceName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="serviceDescription" className="block text-lg font-medium text-gray-700">Service Description:</label>
          <textarea
            id="serviceDescription"
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
            onChange={(e) => setServicePrice(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Upload Images:</label>
          {images.map((image, index) => (
            <div key={index} className="mt-2">
              <input
                type="file"
                onChange={(e) => handleImageChange(index, e)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {imagePreviews[index] && (
                <img src={imagePreviews[index]} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded-md shadow-md mt-2" />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServiceForm;
