import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../lang/en.json";
import ta from "../lang/ta.json";
import hi from "../lang/hi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: {
          ...en
        }
      },
      ta: {
        translation: {
          ...ta
        }
      },
      hi: {
        translation: {
          ...hi
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
