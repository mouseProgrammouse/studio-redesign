// src/i18nClient.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18next using the data embedded by SSR
i18n.use(initReactI18next).init({
  lng: window.initialLanguage || "ua",
  fallbackLng: "ua",
  debug: process.env.NODE_ENV === "development",
  supportedLngs: ["ua", "ru"],
  ns: ["translation"],
  defaultNS: "translation",
  resources: window.initialI18nStore ? JSON.parse(window.initialI18nStore) : {},
  interpolation: {
    escapeValue: false, // React already prevents XSS
  },
});

export default i18n;
