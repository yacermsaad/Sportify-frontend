import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './consultation.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

function ConsultationAi() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const { t, i18n } = useTranslation();

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true); // Start showing the loading state
    const newMessages = [
      ...messages,
      { type: 'user', text: question, time: getCurrentTime() }
    ];
    setMessages(newMessages);
    setQuestion('');

    try {
      // Simulate a delay to show the "typing" state
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setMessages([
        ...newMessages,
        { type: 'ai', text: aiResponse, time: getCurrentTime() }
      ]);
    } catch (error) {
      console.log(error);
      setMessages([
        ...newMessages,
        { type: 'ai', text: t('error'), time: getCurrentTime() }
      ]);
    }

    setGeneratingAnswer(false); // Hide the loading state after response is received
  }

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-10 to-green-30">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-black-500 text-center">{t('chatWithSportify')}</h1>
          </div>
          <div className="p-4 overflow-auto h-96">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              </div>
            ))}
            {generatingAnswer && (
              <div className="mb-4 p-3 rounded-lg bg-gray-100 text-left">
                <p className="italic text-gray-500">{t('aiProcessing')}</p>
                <div className="text-xs text-gray-500 mt-1">{getCurrentTime()}</div>
              </div>
            )}
          </div>
          <form onSubmit={generateAnswer} className="p-4 border-t border-gray-200 flex items-center space-x-4">
            <textarea
              required
              className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-400"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t('askAnything')}
            />
            <button
              type="submit"
              className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={generatingAnswer}
            >
              {t('send')}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ConsultationAi;
