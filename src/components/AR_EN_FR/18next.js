import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translitionAR from "./AR.json";
import translitionFR from "./FR.json";

const resources = {
  ar: {
    translation: translitionAR
  },
  fr: {
    translation: translitionFR
  }
};

i18n
.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", 

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
      useSuspense:false
    }
  });

  export default i18n;