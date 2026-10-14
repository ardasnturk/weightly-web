import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import tr from "./locales/tr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import fr from "./locales/fr.json";

export const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "fr", name: "Français" },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      de: { translation: de },
      es: { translation: es },
      it: { translation: it },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    supportedLngs: languages.map((language) => language.code),
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
});

export default i18n;
