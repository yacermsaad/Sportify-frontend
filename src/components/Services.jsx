import React from 'react';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import service from './service';
import Service from './service';

function Services() {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default to 6 items

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

  // Calculate the index of the first and last item to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return (
    <div>
      <Navbar />

      <div id='blogs' className="p-8 relative rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Résultats pour  <span style={{ color: 'lightgreen' }}>Yoga</span></h1>
        <p className="mb-4" style={{ width: "32%" }}>Recherchez plutôt Yoga.</p>

        <div className="flex mb-4" style={{ gap: "1rem" }}>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Catégorie</option>
              <option value="yoga-studio">Studio de yoga</option>
              <option value="yoga-class">Cours de yoga</option>
              <option value="yoga-retreat">Retraite de yoga</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Détails du prestataire</option>
              <option value="provider1">Prestataire 1</option>
              <option value="provider2">Prestataire 2</option>
              <option value="provider3">Prestataire 3</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Budget</option>
              <option value="budget-low">Bas</option>
              <option value="budget-medium">Moyen</option>
              <option value="budget-high">Élevé</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Délais de la réalisation de la commande</option>
              <option value="short-term">Court terme</option>
              <option value="medium-term">Moyen terme</option>
              <option value="long-term">Long terme</option>
            </select>
          </div>
        </div>

        <p>
          <i className="fa-solid fa-language"></i> Certaines informations ont été traduites automatiquement. 
          Afficher la version anglaise
        </p>

        <div className="flex justify-between items-center mb-4" style={{ marginTop: "30px" }}>
          <p style={{ color: "gray" }}>41 résultats</p>
          <div>
            <span>Triez par :</span>
            <select className="rounded-md px-4 py-2 border border-gray-300 ml-2">
              <option value="relevance">Pertinence</option>
              <option value="best-sellers">Meilleures ventes</option>
              <option value="latest">Dernières nouveautés</option>
            </select>
          </div>
        </div>

        <Service/>
      
      <div className="flex justify-between mt-4">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={nextPage}>
        Next
      </button>
    </div>

      </div>

      <Footer />
    </div>
  );
}

export default Services;
