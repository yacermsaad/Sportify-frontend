import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Message() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [messageTo, setMessageTo] = useState('');
    const [userId, setUserId] = useState(''); // assuming user id is needed

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000//api', // replace with your backend URL
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // assuming you store the token in localStorage
        }
    });

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await api.get('/messages/inbox');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages', error);
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            await api.post('/messages/send', { message, message_to: messageTo });
            setMessage('');
            setMessageTo('');
            fetchMessages(); // Refresh the message list after sending
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    const deleteMessage = async (id) => {
        try {
            await api.delete(`/messages/${id}`);
            setMessages(messages.filter(message => message.id !== id));
        } catch (error) {
            console.error('Error deleting message', error);
        }
    };

    return (
        <div className="App">
            <h1>Messaging App</h1>
            <div className="send-message">
                <form onSubmit={sendMessage}>
                    <div>
                        <label htmlFor="messageTo">Send message to:</label>
                        <input
                            type="text"
                            id="messageTo"
                            value={messageTo}
                            onChange={(e) => setMessageTo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="inbox">
                <h2>Inbox</h2>
                {messages.map(message => (
                    <div key={message.id} className="message">
                        <p><strong>From:</strong> {message.sender.name}</p>
                        <p><strong>Message:</strong> {message.message}</p>
                        <p><strong>Sent On:</strong> {new Date(message.message_on).toLocaleString()}</p>
                        <button onClick={() => deleteMessage(message.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;
