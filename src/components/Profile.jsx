import React, { useState } from 'react';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [showFullInfo, setShowFullInfo] = useState(false);

    const toggleFullInfo = () => {
        setShowFullInfo(!showFullInfo);
    };

    return (
        <div className="bg-gray-100">
            {/* Navbar */}
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
                                <span>Jane Doe</span>
                                <img className="inline h-6 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="Avatar" />
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
                        </div>
                    </nav>
                </div>
            </div>

            
            {/* End of Navbar */}

            {/* Profile Section */}
            <div className="container mx-auto my-5 p-5" >
                <div className="md:flex no-wrap md:-mx-2">
                    {/* Left Side - Profile Card */}
                    <div className="w-full md:w-3/12 md:mx-2" >
                        <div className="bg-white p-3 border-t-4 border-green-400" style={{borderRadius:"10px"}}>
                            <div className="image overflow-hidden" >
                                <img
                                    className="h-auto w-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum
                                sequi illum qui unde aspernatur non deserunt
                            </p>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                    </span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>

                        <div className="my-4"></div>

                        {/* Friends card */}
                        <div className="bg-white p-3 hover:shadow" style={{borderRadius:"10px"}}>
                            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                <span className="text-green-500">
                                    <svg
                                        className="h-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </span>
                                <span>Similar Profiles</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center my-2">
                                    <img
                                        className="h-16 w-16 rounded-full mx-auto"
                                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107240992.jpg"
                                        alt="Friend 1"
                                    />
                                    <p className="text-xs text-gray-500">John Doe</p>
                                    </div>
                                    <div className="text-center my-2">
                                        <img
                                            className="h-16 w-16 rounded-full mx-auto"
                                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
                                            alt="Friend 2"
                                        />
                                        <p className="text-xs text-gray-500">Jane Smith</p>
                                    </div>
                                    <div className="text-center my-2">
                                        <img
                                            className="h-16 w-16 rounded-full mx-auto"
                                            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
                                            alt="Friend 3"
                                        />
                                        <p className="text-xs text-gray-500">Robert Johnson</p>
                                    </div>
                                </div>
                            </div>
                            {/* End of Friends card */}
    
                            {/* Recent Activity */}
                            <div className="bg-white p-3 mt-3 hover:shadow">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-indigo-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                            <path d="M21 12a9 9 0 01-18 0"></path>
                                            <path d="M3 6v6a9 9 0 0018 0V6"></path>
                                        </svg>
                                    </span>
                                    <span>Recent Activity</span>
                                </div>
                                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Created a new project:</span>
                                        <span className="ml-auto font-semibold">Project X</span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Completed a task:</span>
                                        <span className="ml-auto font-semibold">Task Y</span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Added a new member:</span>
                                        <span className="ml-auto font-semibold">John Doe</span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Joined a team:</span>
                                        <span className="ml-auto font-semibold">Team A</span>
                                    </li>
                                </ul>
                            </div>
                            {/* End of Recent Activity */}
                        </div>
                        {/* End Left Side - Profile Card */}
    
                        {/* Right Side - Main Content */}
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="bg-white p-3 shadow-sm rounded-sm" >
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8" style={{borderRadius:"30px"}}>
                <span className="text-green-500">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <div className="px-4 py-2">Female</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                        <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Current Address</div>
                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Permanent Address</div>
                        <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                            <a href="mailto:jane@example.com" className="text-blue-800">jane@example.com</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                    {showFullInfo && (
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Additional Information</div>
                            <div className="px-4 py-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, purus nec
                                varius fermentum, mauris tortor convallis ex, a luctus diam orci vel dui. Sed id nunc
                                ac eros dignissim vulputate.
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={toggleFullInfo}
                className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                {showFullInfo ? 'Hide Full Information' : 'Show Full Information'}
            </button>
        </div>
                            </div>
                        </div>

                        
                        {/* End Right Side - Main Content */}
                    </div>
                </div>
                {/* End of Profile Section */}
            </div>
        );
    };
    
    export default Profile;
    