import React from 'react';
import { useTranslation } from 'react-i18next';


const FAQ = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen" style={{ marginTop: "180px" }}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          {t('FAQTitle')}
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          {t('FAQSubtitle')}
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <FAQItem question={t('Question1')} answer={t('Answer1')} />
        <FAQItem question={t('Question2')} answer={t('Answer2')} />
        <FAQItem question={t('Question3')} answer={t('Answer3')} />
        <FAQItem question={t('Question4')} answer={t('Answer4')} />
        <FAQItem question={t('Question5')} answer={t('Answer5')} />
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          {answer}
        </p>
      </details>
    </div>
  );
};

export default FAQ;
