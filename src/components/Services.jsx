import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Service from './service'; // Ensure this import is correct
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t, i18n } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default to 6 items
  const [data, setData] = useState([]);

  // Function to update itemsPerPage based on screen width
  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setItemsPerPage(6); // Desktop: Show 6 items per page
    } else if (screenWidth >= 768) {
      setItemsPerPage(4); // iPad: Show 4 items per page
    } else {
      setItemsPerPage(2); // Phones: Show 2 items per page
    }
  };

  // Update itemsPerPage when the screen resizes
  useEffect(() => {
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Function to handle next page click
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8000/api/blogs')
      .then(response => {
        setData(response.data.blogs);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <Navbar fetchData={fetchData} />

      <div id='blogs' className="p-8 relative rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
        <p className="mb-4" style={{ width: "32%" }}>{t('discoverServices')}</p>

        <Service data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />

        <div className="flex justify-between mt-4">
          <button onClick={prevPage} disabled={currentPage === 1}>
            {t('previous')}
          </button>
          <button onClick={nextPage}>
            {t('next')}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
