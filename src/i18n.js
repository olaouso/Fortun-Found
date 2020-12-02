/* eslint-disable camelcase */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_ar from "./locales/ar.json";
import common_en from "./locales/en.json";
import common_tr from "./locales/tr.json";

const resources = {
  en: {
    translation: common_en,
  },
  ar: {
    translation: common_ar,
  },
  tr: {
    translation: common_tr,
  },
};

i18n

  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      wait: true,
    },
    resources,
  });

export default i18n;
