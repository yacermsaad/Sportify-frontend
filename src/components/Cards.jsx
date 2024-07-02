import React from 'react';
import { useTranslation } from 'react-i18next';

const Cards = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="antialiased w-full h-full bg-white text-gray-400 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div className="text-center my-10">
          <h1 className="font-bold text-4xl text-black">{t('cheznous')}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
          {/* Card 1 */}
          <div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
            <div className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-black">{t('activityTitle')}</h2>
            </div>
            <div className="px-6 py-4">
              <div className="my-5">
                <i className="fa-solid fa-person-walking" style={{ fontSize: "47px", color: "lightgreen" }}></i>
                <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
                  {t('activityDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
            <div className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-black">{t('activityTitle')}</h2>
            </div>
            <div className="px-6 py-4">
              <div className="my-5">
                <i className="fa-solid fa-person-walking" style={{ fontSize: "47px", color: "lightgreen" }}></i>
                <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
                  {t('activityDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
            <div className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-black">{t('activityTitle')}</h2>
            </div>
            <div className="px-6 py-4">
              <div className="my-5">
                <i className="fa-solid fa-person-walking" style={{ fontSize: "47px", color: "lightgreen" }}></i>
                <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
                  {t('activityDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
