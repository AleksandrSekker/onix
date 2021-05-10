import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './en/translation';
import russian from './ru/translation';
import ukranian from './ua/translation';

const resources = {
  en: {
    translation: english
  },
  ru: {
    translation: russian
  },
  ua: {
    translation: ukranian
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['en', 'ru', 'ua'],
    debug: true,
    detection: {
      order: ['queryString', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
