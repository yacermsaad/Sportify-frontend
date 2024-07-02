import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './contact.css';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const { t, i18n } = useTranslation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8000/api/contact', {
                user_id: user.id, // Include the user ID
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                message,
            });

            if (response.status === 200) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setSuccess(true); // Set success to true to display the modal
            } else {
                setError(response.data.message || 'An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    const closeModal = () => {
        setSuccess(false); // Close the modal by setting success to false
    };

    return (
        <section className="contact-section">
            <Navbar/>
            <div className="contact-bg">
                <h3>{t('get_in_touch')}</h3>
                <h2>{t('contact_us')}</h2>
                <div className="line"></div>
                <p className="text">{t('contact_info')}</p>
            </div>

            <div className="contact-body">
                <div className="contact-info">
                    <div><i className="fas fa-mobile-alt"></i>{t('phone_no')}<span className="text">1-2392-23928-2</span></div>
                    <div><i className="fas fa-envelope-open"></i>{t('email')}<span className="text">mail@company.com</span></div>
                    <div><i className="fas fa-map-marker-alt"></i>{t('address')}<span className="text">2939 Patrick Street, Victoria TX, United States</span></div>
                    <div><i className="fas fa-clock"></i>{t('opening_hours')}<span className="text">{t('monday_friday')}</span></div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('first_name')}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('last_name')}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('phone')}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <textarea
                            rows="5"
                            placeholder={t('message')}
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        {error && <div className="error">{error}</div>}
                        
                        <input type="submit" className="send-btn" value={t('send_message')} />
                    </form>
                    <div>
                        <img src="img/contact.svg" alt="Contact" style={{ width: "600px" }} />
                    </div>
                </div>
            </div>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>

            <div className="contact-footer">
                <h3>{t('follow_us')}</h3>
                <div className="social-links">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-youtube"></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
