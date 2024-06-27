import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './contact.css';
import Navbar from './Navbar';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8000/api/contact', {
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
                setSuccess('Your message has been sent successfully!');
            } else {
                setError(response.data.message || 'An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <section className="contact-section">
            <Navbar/>
            <div className="contact-bg">
                <h3>Get in Touch with Us</h3>
                <h2>Contact Us</h2>
                <div className="line"></div>
                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
            </div>

            <div className="contact-body">
                <div className="contact-info">
                    <div><i className="fas fa-mobile-alt"></i>Phone No.<span className="text">1-2392-23928-2</span></div>
                    <div><i className="fas fa-envelope-open"></i>E-mail<span className="text">mail@company.com</span></div>
                    <div><i className="fas fa-map-marker-alt"></i>Address<span className="text">2939 Patrick Street, Victoria TX, United States</span></div>
                    <div><i className="fas fa-clock"></i>Opening Hours<span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span></div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
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
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        {error && <div className="error">{error}</div>}
                        {success && <div className="success">{success}</div>}
                        <input type="submit" className="send-btn" value="Send Message" />
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
            <h3>Follow Us</h3>
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

               
