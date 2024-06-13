import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-blue-gray-50 min-h-screen antialiased font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* First Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Orders</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$74,322</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">+3%</strong>&nbsp;than last month
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
                <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75  .5a8.25 8.25 0 019 13.5V20M15.75 5.25a8.25 8.25 0 019 13.5V20"></path>
                  </svg>
                  10 Active Projects
                </p>
              </div>
              <button className="inline-flex items-center gap-1 antialiased leading-normal font-sans text-sm font-normal text-blue-500 hover:text-blue-600">
                <span>View All</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              {/* Replace with your project list */}
              <ul className="divide-y divide-blue-gray-200">
                <li className="flex justify-between py-2">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Dashboard Design</span>
                  </div>
                  <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">90%</span>
                </li>
                <li className="flex justify-between py-2">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Backend API</span>
                  </div>
                  <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">70%</span>
                </li>
                <li className="flex justify-between py-2">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Database Migration</span>
                  </div>
                  <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">50%</span>
                </li>
                {/* Add more projects as needed */}
              </ul>
            </div>
          </div>

          {/* Calender Section */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Calendar</h6>
                <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                  2 Events Scheduled
                </p>
              </div>
              <button className="inline-flex items-center gap-1 antialiased leading-normal font-sans text-sm font-normal text-blue-500 hover:text-blue-600">
                <span>View All</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today</span>
                <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">14, August</span>
              </div>
              <div className="divide-y divide-blue-gray-200">
                <div className="flex justify-between py-2">
                  <div>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Product Launch</span>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-400">10:00 AM - 12:00 PM</span>
                  </div>
                  <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Virtual</span>
                </div>
                <div className="flex justify-between py-2">
                  <div>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Team Meeting</span>
                    <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-400">02:00 PM - 03:00 PM</span>
                  </div>
                  <span className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Virtual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

