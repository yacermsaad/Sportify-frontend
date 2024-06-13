// BlogPosts.jsx
import React from 'react';

const Service = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: 'Article 1',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
    {
      id: 2,
      title: 'Article 2',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
    {
      id: 3,
      title: 'Article 3',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
    {
      id: 4,
      title: 'Article 4',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
    {
      id: 5,
      title: 'Article 5',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
    {
      id: 6,
      title: 'Article 6',
      imageUrl: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Morris Muthigani',
      publishedDate: '19/03/2024',
      daysAgo: '2 Days ago',
      rating: '5.0',
      price: 'À partir de 80 $US',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
          <a
            target="_self"
            href="/blog/slug"
            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
          ></a>
          <div className="relative mb-4 rounded-2xl">
            <img
              className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              src={article.imageUrl}
              alt=""
            />
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
              <span className="ml-1 text-sm text-slate-400">2</span>
            </div>
            <a
              className="flex justify-center items-center bg-green-300 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
              href="/blog/slug"
              target="_self"
              rel="noopener noreferrer"
            >
              More details
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-between items-center w-full pb-4 mb-auto">
            <div className="flex items-center">
              <div className="pr-3">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div className="flex flex-1">
                <div>
                  <p className="text-sm font-semibold ">
                    {article.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    Published on {article.publishedDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-sm flex items-center text-gray-500 ">
                {article.daysAgo}
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
              <span style={{fontSize:"15px",marginLeft:"20px"}}>{article.rating}</span>
              <span className="ml-2" style={{marginLeft:"180px",fontSize:"15px"}}>{article.price}</span>
            </div>
          </h3>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Service;
