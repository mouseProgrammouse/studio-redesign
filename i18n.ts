import i18n from "i18next";
import Backend from "i18next-fs-backend";
import { initReactI18next } from "react-i18next";
import { LanguageDetector } from "i18next-http-middleware";
import path from "node:path";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["langDetectorFromPath", "path", "querystring"],
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      lookupQuerystring: "lng",
      lookupPath: "",
      localeDetection: false,
    },
    fallbackLng: "uk",
    preload: ["uk", "ru"],
    supportedLngs: ["uk", "ru"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: path.join(__dirname, "../src/locales/{{lng}}/{{ns}}.json"),
    },
    interpolation: {
      escapeValue: false, // React already prevents XSS attacks
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18n;
