import React, { useEffect, useState } from 'react';
import './Dahboard.css';

const Dashboard = () => {
    const [activeLink, setActiveLink] = useState('Dashboard');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleSideMenuClick = () => {
            const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

            allSideMenu.forEach(item => {
                item.addEventListener('click', function () {
                    setActiveLink(item.textContent.trim());
                });
            });
        };

        handleSideMenuClick();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const getContent = () => {
        if (activeLink === 'Blogs') {
            return (
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Recent Orders</h3>
                            <i className='bx bx-search'></i>
                            <i className='bx bx-filter'></i>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>blog</th>
                                    <th>Date blog</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="https://www.nifs.org/hs-fs/hubfs/GettyImages-1134331738.jpg?width=486&name=GettyImages-1134331738.jpg" alt="user" />
                                        <p>blog 1</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <div style={{display:"flex"}}>
                              <td><span className="status completed" style={{ background: "lightgreen" }}>Accepté</span></td> &nbsp;
                              <td><span className="status completed" style={{ background: "red" }}>refusé</span></td>
                              </div>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://static.toiimg.com/thumb/76898881.cms?width=400&height=300&resizemode=4&imgsize=1311003" alt="user" />
                                        <p>blog 2</p>
                                    </td>
                                    <td>01-10-2021</td>
                              <div style={{display:"flex"}}>
                              <td><span className="status completed" style={{ background: "lightgreen" }}>Accepté</span></td>&nbsp;
                              <td><span className="status completed" style={{ background: "red" }}>refusé</span></td>
                              </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <ul className="box-info">
                    {/* Box info items */}
                </ul>
            );
        }
    };

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <section id="sidebar">
                {/* Sidebar content */}
                <a href="#" className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="font-bold text-2xl md:text-2xl">Sporti<span className="text-green-500">fy.</span></span>
                </a>
                <ul className="side-menu top">
                    <li className={activeLink === 'Dashboard' ? 'active' : ''}>
                        <a href="#">
                            <i className='bx bxs-dashboard'></i>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li className={activeLink === 'Blogs' ? 'active' : ''}>
                        <a href="#">
                            <i className='bx bxs-shopping-bag-alt'></i>
                            <span className="text">Blogs</span>
                        </a>
                    </li>
                    {/* Other sidebar menu items */}
                </ul>
            </section>

            <section id="content">
                {/* Content section */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="nav-link">Categories</a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden onChange={toggleDarkMode} />
                    <label htmlFor="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell'></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/22225040/10-questions-posees-a-un-coach-de-course.jpeg" alt="profile" />
                    </a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>{activeLink}</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">{activeLink}</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn-download" style={{background:"lightgreen", color:"white",fontWeight:"bold"}}>
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text" style={{background:"lightgreen", color:"white",fontWeight:"bold"}}>Download PDF</span>
                        </a>
                    </div>

                    {getContent()}
                </main>
            </section>
        </div>
    );
};

export default Dashboard;
