import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Service = () => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsCount, setSearchResultsCount] = useState(0); // State to hold the count of search results

  useEffect(() => {
    axios.get('http://localhost:8000/api/service')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);

  useEffect(() => {
    if (sortOrder !== 'none') {
      sortArticles(sortOrder);
    }
  }, [sortOrder]);

  useEffect(() => {
    // Calculate the number of search results when searchTerm changes
    const filteredArticles = articles.filter(article =>
      article.coach.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResultsCount(filteredArticles.length);
  }, [searchTerm, articles]);

  const sortArticles = (order) => {
    const sortedArticles = [...articles];
    if (order === 'low') {
      sortedArticles.sort((a, b) => a.prix - b.prix);
    } else if (order === 'high') {
      sortedArticles.sort((a, b) => b.prix - a.prix);
    } else if (order === 'medium') {
      const averagePrice = articles.reduce((acc, article) => acc + article.prix, 0) / articles.length;
      sortedArticles.sort((a, b) => Math.abs(a.prix - averagePrice) - Math.abs(b.prix - averagePrice));
    } else if (order === 'oldest') {
      sortedArticles.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (order === 'newest') {
      sortedArticles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (order === 'likes') {
      sortedArticles.sort((a, b) => b.likes.length - a.likes.length);
    }
    setArticles(sortedArticles);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getFullImageUrl = (imagePath) => {
    const baseUrl = 'http://localhost:8000/';
    return `${baseUrl}${imagePath}`;
  };

  const fetchLikesCount = async (articleId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/service/${articleId}/likes`);
      return response.data.likes.length;
    } catch (error) {
      console.error(`Failed to fetch likes for article ${articleId}:`, error);
      return 0; // Return 0 if fetching fails
    }
  };

  const [likesCounts, setLikesCounts] = useState({});

  useEffect(() => {
    const fetchLikesCounts = async () => {
      const counts = {};
      for (const article of articles) {
        const likesCount = await fetchLikesCount(article.id);
        counts[article.id] = likesCount;
      }
      setLikesCounts(counts);
    };
    fetchLikesCounts();
  }, [articles]);

  const filteredArticles = articles.filter(article =>
    article.coach.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isRTL = i18n.dir() === 'rtl'; // Check if current language is RTL

  return (
    <div>
      <div className={`mb-4 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="flex">
          <label htmlFor="sortOrder" className="mr-2">{t('sortBy')}</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="none">{t('none')}</option>
            <option value="low">{t('low')}</option>
            <option value="medium">{t('medium')}</option>
            <option value="high">{t('high')}</option>
            <option value="oldest">{t('oldest')}</option>
            <option value="newest">{t('newest')}</option>
            <option value="likes">{t('likes')}</option>
          </select>
        </div>
        <div className={`flex ${isRTL ? 'ml-4' : 'mr-4'}`}>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Display the number of search results found */}
      {searchTerm && (
        <div className={`flex justify-between items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`} style={{ marginTop: "30px" }}>
          <p style={{ color: "gray" }}>{filteredArticles.length} {t('resultsFound', { count: filteredArticles.length })}</p>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ${isRTL ? 'grid-flow-row' : ''}`}>
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
            <div className="relative mb-4 rounded-2xl">
              {article.images.length > 0 && (
                <img
                  className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  src={`http://localhost:8000/storage/${article.images[0].image}`}
                  alt={article.titre}
                />
              )}
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span className="ml-1 text-sm text-slate-400">{article.likes.length}</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="pr-3">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={`http://localhost:8000/storage/${article.coach.image}`}
                    alt={article.coach?.fullname || 'Coach'}
                  />
                </div>
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold ">
                      {article.coach?.fullname || 'Author Name'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t('publishedOn', { date: formatDate(article.created_at) })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500 ">
                  {calculateDaysAgo(article.created_at)} {t('daysAgo')}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8 flex items-center">
              <div className="flex items-center mt-2">
                <i className="fas fa-star text-green-500 mr-1"></i>
                <span style={{ fontSize: "15px", marginLeft: "20px" }}>{article.comments.length > 0 ? article.comments[0].nb_start : 'N/A'}</span>
                <span className="ml-2" style={{ marginLeft: "180px", fontSize: "15px" }}>A partir de {article.prix} Mad</span>
              </div>
            </h3>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
