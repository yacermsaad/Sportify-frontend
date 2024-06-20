import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [picture, setpicture] = useState(null);
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setpicture(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('picture', picture);
        
        axios.post('http://localhost:8000/api/becomcoache2', formData)
            .then(response => {
                console.log(response.data);
                fetchImages();
                setError('');
            })
            .catch(error => {
                console.error('There was an error uploading the image!', error);
                setError('Error uploading image');
            });
    
     };

    const fetchImages = () => {
        axios.get('http://localhost:8000/api/images')
            .then(response => {
                console.log(response.data.image);
                setImages(response.data.image);
            })
            .catch(error => {
                console.error('There was an error fetching the images!', error);
                setError('Error fetching images');
            });
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>
            {error && <p>{error}</p>}
            <div>
                 <img  src={`http://localhost:8000/storage/${images}`} alt="uploaded" />
            </div>
        </div>
    );
};

export default Test;
