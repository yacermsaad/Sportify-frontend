import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="antialiased" style={{ marginTop: "70px" }}>
                <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <h1 className="text-4xl font-medium">Reset password</h1>
                    <p className="text-slate-500">Fill up the form to reset the password</p>
                    <form onSubmit={handleSubmit} className="my-10">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Email address</p>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    placeholder="Enter email address"
                                    required
                                />
                            </label>
                            <button
                                type="submit"
                                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                                style={{ background: "lightgreen" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                    />
                                </svg>
                                <span>Reset password</span>
                            </button>
                            {message && <p className="text-green-500">{message}</p>}
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResetPasswordForm;
