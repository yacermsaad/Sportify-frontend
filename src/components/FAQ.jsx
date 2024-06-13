// FAQ.jsx
import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen" style={{marginTop:"180px"}}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          FAQ - Rapide Course
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequently asked questions about the Rapide Course
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> What is the Rapide Course?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              The Rapide Course is an intensive training program designed to accelerate your fitness journey with structured workouts and personalized coaching.
            </p>
          </details>
        </div>
        
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> What are the benefits of the Rapide Course?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              The Rapide Course offers rapid fitness gains through structured workouts, nutritional guidance, and expert coaching, tailored to achieve your goals faster.
            </p>
          </details>
        </div>
        
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Is the Rapide Course suitable for beginners?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Yes, the Rapide Course is designed to cater to all fitness levels, including beginners. Our trainers provide modifications and personalized attention to ensure everyone can benefit.
            </p>
          </details>
        </div>
        
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How long is the Rapide Course?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              The Rapide Course typically runs for 6 weeks, focusing on intensive training sessions and progressive fitness goals.
            </p>
          </details>
        </div>
        
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How do I enroll in the Rapide Course?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              To enroll in the Rapide Course, visit our gym's reception desk or contact us via phone or email to get started with registration.
            </p>
          </details>
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;
